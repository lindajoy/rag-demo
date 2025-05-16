# 🧠 Retrieval-Augmented Generation (RAG) Demo with Google Gemini, Web Scraping & Angular Frontend

## 🔍 What is RAG?

**Retrieval-Augmented Generation (RAG)** is a technique that enhances language models by supplementing them with external, relevant information at runtime. It combines:

1. **Retrieval** – Fetching relevant content (e.g., documents, web pages)
2. **Generation** – Using an LLM (Large Language Model) to answer questions based on that retrieved content

This allows RAG systems to produce more **factual, contextual, and up-to-date answers**.

---

## 📘 Project Overview

This is a full-stack RAG demo featuring:

- 🌐 **Web scraping** using Node.js + Cheerio to extract real content from websites
- 🧠 **Google Gemini 2.0 Flash** for natural language generation
- 🧲 **Google Embedding API** to vectorize webpage content and perform similarity search
- 🧠 A basic **in-memory vector store** for document embeddings
- 📱 A modern **Angular frontend** to interact with the backend
- 🚀 REST API to support RAG queries

---

## 🧠 RAG Workflow (How it Works)

1. User enters a URL and a question in the Angular frontend.
2. Angular sends a request to the Node.js backend via the `/api/ask` endpoint.
3. The backend:
   - Scrapes and processes the web content.
   - Chunks and embeds the content via Google's embedding model.
   - Stores it in memory and retrieves the top relevant chunks.
   - Constructs a prompt and sends it to Gemini for answering.
4. The generated response is returned to the Angular frontend and displayed to the user.

---

## 🧱 Tech Stack

| Layer        | Tool / Framework              |
|--------------|-------------------------------|
| Frontend     | Angular                       |
| Backend      | Node.js + Express             |
| Scraping     | Axios + Cheerio               |
| Embeddings   | Google `embedding-001`        |
| LLM          | Google Gemini 2.0 Flash       |
| Vector Store | In-memory array               |
| API          | RESTful endpoint (`/api/ask`) |

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/rag-demo.git
cd rag-demo

