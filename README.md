# 🧠 Retrieval-Augmented Generation (RAG) Demo with Google Gemini & Angular Frontend

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

## 🧪 What's in This Demo?
This demo is designed to help you understand and visualize the RAG pipeline in action. It includes:

A user input field for querying

A retriever that fetches top relevant documents from a knowledge base 

A language model (e.g., OpenAI GPT or a local model) that uses the documents as context to generate answers

An interface showing:

User question

Retrieved context

Final generated response
   
## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/rag-demo.git
cd rag-demo
```

### 2. Install Backend Dependencies
```
npm install

```

### 3.Create Environment File
Create a .env.local file in the root directory and add your Google API key:
```
API_KEY=your_google_api_key
```
 ### 4. Start the Backend Server
 ```
  node index.js
```

🖥️ Frontend (Angular)
5. Install Angular Dependencies
```
cd frontend
npm install

💡 Be sure to delete package-lock.json if it exists.
```

6. Start Angular Server
   ```
   ng serve
   ```


 











