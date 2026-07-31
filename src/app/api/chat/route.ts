import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

const MAX_MESSAGE_LENGTH = 500;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_REQUESTS = 8;
const promptPath = path.join(process.cwd(), 'src', 'backend', 'prompt.txt');
const promptPromise = readFile(promptPath, 'utf8');
const requestBuckets = new Map<string, number[]>();

function isRateLimited(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  const clientId = forwardedFor?.split(',')[0]?.trim() || 'local';
  const cutoff = Date.now() - RATE_LIMIT_WINDOW_MS;
  const recentRequests = (requestBuckets.get(clientId) || []).filter(
    timestamp => timestamp > cutoff,
  );

  if (recentRequests.length >= RATE_LIMIT_REQUESTS) {
    requestBuckets.set(clientId, recentRequests);
    return true;
  }

  recentRequests.push(Date.now());
  requestBuckets.set(clientId, recentRequests);

  if (requestBuckets.size > 500) {
    for (const [key, timestamps] of requestBuckets) {
      if (!timestamps.some(timestamp => timestamp > cutoff)) {
        requestBuckets.delete(key);
      }
    }
  }

  return false;
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Dealerbot is not configured.' },
      { status: 503 },
    );
  }

  let message: string;

  try {
    const body = await request.json();
    message = typeof body?.message === 'string' ? body.message.trim() : '';
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!message) {
    return NextResponse.json({ error: 'A message is required.' }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Messages must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
      { status: 400 },
    );
  }

  if (isRateLimited(request)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a minute and try again.' },
      { status: 429 },
    );
  }

  try {
    const instructions = await promptPromise;
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o',
        instructions,
        input: message,
        max_output_tokens: 300,
        store: false,
      }),
      signal: AbortSignal.timeout(25_000),
    });

    const data = await response.json() as {
      output?: Array<{
        type?: string;
        content?: Array<{ type?: string; text?: string }>;
      }>;
    };

    if (!response.ok) {
      throw new Error(`OpenAI request failed with status ${response.status}.`);
    }

    const output = data.output
      ?.flatMap(item => item.type === 'message' ? item.content || [] : [])
      .find(content => content.type === 'output_text')
      ?.text
      ?.trim();

    if (!output) {
      throw new Error('OpenAI returned an empty response.');
    }

    return NextResponse.json(
      { response: output },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    console.error('Dealerbot request failed:', error);
    return NextResponse.json(
      { error: 'Dealerbot could not answer right now.' },
      { status: 502 },
    );
  }
}
