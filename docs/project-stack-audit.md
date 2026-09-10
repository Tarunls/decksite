# Featured project stack audit

Reviewed 2026-09-10 against fresh GitHub checkouts. This inventory covers the four projects currently featured on the portfolio. It does not add previously excluded projects. About retains the existing resume skills and adds tools demonstrated in these implementations.

## Cinder Control

Source: `Tarunls/fire-sim`, commit `f02c9d7597a35f584cbe0fb454adc839c07c8695`.

- `package.json`, `app/providers.tsx`, `app/hooks/useSimulation.ts`: Next.js, React, TypeScript, Tailwind, TanStack Query provider and mutation-driven simulation requests.
- `backend/main.py`: Python, FastAPI, Uvicorn, Pydantic request models, NumPy grids and randomized cellular-automata spread with wind, fuel and terrain factors.
- `backend/ai_engine.py`: OpenAI-backed intent parsing and command routing.
- `app/page.tsx`: Mapbox/react-map-gl, GeoJSON layers, NOAA/NWS weather calls, OpenStreetMap infrastructure queried through Overpass.
- `app/utils/elevenLabs.ts`, `app/components/ImpactChat.tsx`: ElevenLabs speech synthesis/transcription and browser voice controls.

Correction: the existing summary said “parallel” simulation. The reviewed implementation uses NumPy operations and nested Python loops; no multiprocessing, distributed execution or GPU implementation was found. The portfolio now says NumPy cellular automata. SciPy is mentioned in setup prose but not used in the inspected implementation, so it is not a skill card. Gemini-assisted UI design is not presented as a runtime integration.

## Orune

Source: `Tarunls/manim-mcp-server`, commit `2ad5492789f95d652c3d373239e803d3f018e626`.

- `package.json`, client source, `server/index.ts`: React, Vite, TypeScript, Node and Express. This is not a Next.js application.
- `server/auth-service.ts`, `server/security.ts`: Identity Platform, Firebase Admin sessions, origin/CSRF checks and rate limiting.
- `server/database.ts`, project/user repositories and hosted billing/generation services: PostgreSQL, transactional job creation, credit reservations/ledger entries, idempotency keys and database locking.
- `server/cloud-tasks.ts`, `server/e2b-dispatcher.ts`, `server/hosted-generation-service.ts`: transactional outbox, durable dispatch, Cloud Tasks and isolated E2B execution.
- `server/scoped-codex-proxy.ts`, `server/scoped-narration.ts`, `scripts/lesson_pipeline.mjs`, `scripts/render_scene.py`: OpenAI generation, Python/Manim rendering, Speechify/ElevenLabs narration, FFmpeg output processing and visual review.
- `server/artifact-service.ts`, `scripts/studio_asset.mjs`: private GCS artifacts, signed URLs and Wikimedia Commons asset provenance.
- `infra/terraform/*.tf`, `Dockerfile`, `cloudbuild*.yaml`: Cloud Run API/dispatcher, Cloud SQL, Cloud Storage, Cloud Tasks, IAM/Secret Manager, Cloud Armor, Cloud Build, Docker and Terraform configuration.
- `tests/*.test.*`, `tests/e2e/*`, `package.json`: Node tests, Playwright and axe accessibility checks.

The repository describes staging infrastructure and outstanding narrated-generation certification. Skill cards represent implemented tools and architecture, not a claim that every hosted path has passed production certification. The old Next.js badge was replaced. The standalone Manim storyboard project remains excluded.

## SongBattle

Source: `Tarunls/songbattle`, commit `8300b118d6a223b881003fc4a953f715061d046f`.

- `package.json`, `vercel.json`, `app/*`: production Next.js, React, TypeScript, Tailwind and Vercel.
- `db/index.ts`: Neon serverless PostgreSQL queries, prepared parameters, transaction batches; alternate D1/SQLite adapter.
- `db/schema.ts`, `drizzle/*`: Drizzle schema/migrations for the SQLite path. It is labeled “Drizzle Migrations,” not claimed as the production PostgreSQL ORM.
- `lib/catalog.ts`, `lib/library.ts`, `scripts/ingest.mjs`, enrichment scripts: Apple/iTunes previews and search, Last.fm ranking, optional YouTube metadata, resumable catalog ingestion and bounded cached enrichment.
- `app/page.tsx`: browser AudioContext decoding/waveform data and HTTP-polling multiplayer synchronization. This is not a WebSocket game.
- `lib/audio-preview.ts`, `app/api/audio/route.ts`: MP4Box.js repackaging of authorized AAC samples, HMAC-scoped audio access and Web Crypto.
- `app/api/auth/route.ts`: custom salted PBKDF2 authentication and session handling.
- `vite.config.ts`, `db/index.ts`, build scripts: Vinext/Vite, Cloudflare Workers and D1 are explicitly grouped as the alternate runtime.

## COMMerce

Source: `Tarunls/commerce`, commit `d0fe3bd567b7c4ff5e1b58f6d974525cd577ee08`.

- `public/index.html`, `package.json`, `server.js`: JavaScript React interface with HTML/CSS, Node/Express REST endpoints and Vercel Express deployment. Not TypeScript or Next.js.
- `server.js`, `social.js`: Google OAuth, cookie sessions and scoped YouTube engagement reads.
- `youtube.js`, `reddit.js`: YouTube/Reddit APIs, shared source pools, OAuth and quota-aware batched refresh.
- `store.js`: Upstash Redis via REST, local JSON storage, gzip encoding and bounded snapshot compaction.
- `signals.js`, settlement handlers in `server.js`: deterministic momentum scoring, contract marks, expiry settlement and server-owned balances.
- `test.js`, `storage.test.js`: Node-based behavior and storage checks.

No paid AI model is required for the momentum engine. Redis is not described as a transactional SQL database, and the portfolio makes no distributed-consistency claim for the snapshot store.

## Presentation

The skill inventory lives in `src/lib/projectSkills.ts`; project detail screens group it by purpose and keep the project links before the longer inventory. Brand icons are used where available; engineering practices use category symbols because they do not have official logos. About is a curated overview, not the union of every project-specific implementation detail.
