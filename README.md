#  AI Customer Support Agent (RAG-Based)

An AI-powered customer support system that answers queries strictly from your business documents using Retrieval-Augmented Generation (RAG).

Built for real-world use cases like:

* Customer support automation
* Internal knowledge base
* Document Q&A systems

---

#  Features

* 📄 Upload PDF / TXT documents
* 🔍 Intelligent semantic search (vector embeddings)
* 💬 Ask questions in natural language
* 🧾 Answers strictly from your data (no hallucination)
* 📌 Source-based responses (transparent & reliable)
* ⚡ FastAPI backend + lightweight frontend

---

#  Architecture

```
User → Upload Document
        ↓
Text Extraction → Chunking → Embeddings
        ↓
     Vector DB (Chroma)
        ↓
User Query → Embedding → Similarity Search
        ↓
Context + Prompt → LLM
        ↓
Answer + Sources
```

---

#  Tech Stack

### Backend

* FastAPI
* ChromaDB (Vector Database)
* Sentence Transformers (Embeddings)
* OpenAI API (LLM)

### Frontend

* HTML
* CSS
* JavaScript

---

#  Project Structure

```
ai-support-agent/
│
├── app/
│   ├── api/routes/        # API endpoints
│   ├── services/          # Core logic (RAG pipeline)
│   ├── db/                # Vector DB setup
│   ├── utils/             # Chunking logic
│   ├── schemas/           # Request models
│   └── main.py            # Entry point
│
├── frontend/              # Simple UI
├── requirements.txt
└── .env
```

---

#  Setup & Installation (Local)

## 1. Clone the repo

```
git clone https://github.com/YOUR_USERNAME/ai-support-agent.git
cd ai-support-agent
```

---

## 2. Create virtual environment

### Windows

```
python -m venv venv
venv\Scripts\activate
```

### Mac/Linux

```
python -m venv venv
source venv/bin/activate
```

---

## 3. Install dependencies

```
pip install -r requirements.txt
```

---

## 4. Add environment variables

Create `.env` file:

```
GEMINI_API_KEY=your_api_key_here
```

---

## 5. Run backend server

```
uvicorn app.main:app --reload
```

Server will start at:

```
http://127.0.0.1:8000
```

---

## 6. Run frontend

Open:

```
frontend/index.html
```

in your browser.

---

#  How to Use

1. Upload a document (PDF or TXT)
2. Ask a question
3. Get answers based only on uploaded data
4. View source references

---


# ⚠️ Limitations

* Free-tier hosting may be slow (cold starts)
* Some PDFs may not extract text properly
* No authentication (MVP version)

---

# 🚀 Future Improvements

* Multi-user support
* Authentication system
* Better UI/UX (React-based frontend)
* Streaming responses
* File type support (DOCX, CSV, etc.)
* Persistent vector storage

---


#  Use Cases

* Small business customer support bot
* Legal document assistant
* Internal company knowledge system
* FAQ automation

---


#  Contributing

Pull requests are welcome. For major changes, open an issue first.

---

#  Contact

If you want to use this system for your business or collaborate, feel free to reach out.
