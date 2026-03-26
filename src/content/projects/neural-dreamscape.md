---
title: "My Notes Chatbot"
tagline: "Digitize handwritten journals, search them by content and date, and chat with them using an LLM with RAG."
category: "ChatBOT with RAG"
year: 2026
coverImage: "IMG_5547_y9jitv.jpg"
# coverVideo: "portfolio/neural-dreamscape-demo"
techStack:
  - name: "OCR"
    detail: "Gemini 3.1 Pro Preview via Gemini AI API"
    icon: "document_scanner"
  - name: "Database"
    detail: "SQLite (structured) + ChromaDB (semantic)"
    icon: "database"
  - name: "LLMs"
    detail: "Llama 3.1 8B via Ollama and Gemini 3.1 Pro Preview"
    icon: "smart_toy"
  - name: "Chat UIs"
    detail: "AnythingLLM and Flask server"
    icon: "chat"
mediaSections:
  - layout: "side-by-side"
    items:
      - publicId: "Handwritten_note10.05.2025_fqxih3.jpg"
        label: "Image 01"
        caption: "Handwritten page from my notes"
      - publicId: "chatbot_demo_mb7xoi.mp4"
        type: "video"
        autoplay: true
        loop: true
        label: "Fig 02"
        caption: "Asking Chatbot about highlights of my Japan trip"
keyLearnings:
  - title: "LLM with RAG"
    body: "Giving an LLM context specific to the task, in this case my handwritten notes"
  - title: "Running an LLM Locally"
    body: "Using Llama 3.1 8B via Ollama, ensuring privacy when required"
  - title: "Using Skills with an Agent"
    body: "Storing specific Skills files - in this case for access to updated API documentation"
  - title: 'Using "local by default" tools for Chatbot with RAG'
    body: "Experimented with AnythingLLM and Open WebUI"
quote: "If you would not be forgotten, as soon as you are dead and rotten, either write things worth reading, or do things worth writing"
githubUrl: "https://github.com/DiogoAdaoeSilva/mynotes-chatbot"
tags: ["RAG"]
featured: true
order: 1
---
I built an end-to-end pipeline that digitizes personal handwritten journals and makes them queryable via a custom RAG (Retrieval-Augmented Generation) Chatbot.

Phase 1 OCR Optimization - I iterated through different OCR engines, reducing the Character Error Rate (CER) from 22.7% to < 4%. The extracted text and metadata is store in SQLite, while using ChromaDB as a vector store to enable semantic search (search by meaning not just words).

Phase 2 Chatbot with RAG implementation - testing two distinct chatbot architectures: Local: Llama 3.1 8B running on macOS (M4) via Ollama and a custom Flask UI. Cloud-Hybrid: Gemini 3.1 Pro-Preview integrated through AnythingLLM.

The Gemini-powered setup provided the best reasoning and retrieval accuracy. By using the Gemini API with AnythingLLM, I maintained data privacy: all notes are indexed locally on my Mac, and only specific, encrypted text snippets are sent to Google’s API. In the paid tier, these prompts are excluded from model training.

Tools: **Claude Code**, **Cursor**

<!-- why -->

I have several handwritten journals that store thoughts and memories of great moments through the years. Now I can chat about them with a Chatbot on my laptop, while still keeping them private. My notes are in both Portuguese and English and sometimes my handwriting is so bad I have a hard time understanding what I wrote, a problem that OCR solved!



