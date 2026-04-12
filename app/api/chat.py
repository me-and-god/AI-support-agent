from fastapi import APIRouter
from app.RAG.rag_pipeline import generate_answer
from app.schemas.chat_schema import ChatRequest

router = APIRouter()

@router.post("/")
def chat(req:ChatRequest):
    result = generate_answer(req.query)
    return result