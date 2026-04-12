from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import chat, upload, health

# first create app
app = FastAPI(title="AI Support Agent")

# Then add middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


#Then include routes
app.include_router(upload.router,prefix="/upload")
app.include_router(chat.router, prefix="/chat")
app.include_router(health.router, prefix="/health")
