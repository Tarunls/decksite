import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv() # Load .env file

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://decksite-83y3.vercel.app", # <-- ADD YOUR VERCEL DOMAIN HERE         # <-- ADD CUSTOM DOMAIN IF YOU HAVE ONE
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# --- LOAD CONTEXT FROM prompt.txt ---
try:
    # This ensures it finds the file relative to THIS script, not where you run the command from
    script_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(script_dir, "prompt.txt")
    
    with open(file_path, "r", encoding="utf-8") as f:
        RESUME_TEXT = f.read()
        print("✅ Successfully loaded prompt.txt")
except FileNotFoundError:
    print("❌ Error: prompt.txt not found. Please create it in the backend folder.")
    RESUME_TEXT = "Error: Resume context missing."

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat_endpoint(req: ChatRequest):
    try:
        completion = client.chat.completions.create(
            model="gpt-4o", 
            messages=[
                {
                    "role": "system", 
                    "content": f"You are an AI assistant representing Tarun Sankar. You answer questions about his background, skills, and projects based strictly on the following resume context. Be concise, professional, but slightly witty. context: {RESUME_TEXT}"
                },
                {"role": "user", "content": req.message}
            ]
        )
        return {"response": completion.choices[0].message.content}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)