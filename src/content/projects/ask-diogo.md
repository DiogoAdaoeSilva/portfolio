---
title: "Ask Diogo"
tagline: "A voice agent that knows my experience and interests, and can hold a Product Management conversation on my behalf."
category: "Voice AI Agent"
year: 2026
techStack:
  - name: "Real-time Voice"
    detail: "LiveKit Agents (Python) on LiveKit Cloud"
    icon: "graphic_eq"
  - name: "Speech to Text"
    detail: "AssemblyAI Universal-3.5 Pro + turn detector and Silero VAD"
    icon: "hearing"
  - name: "LLM"
    detail: "OpenAI GPT-6 Luna with my full career material in the system prompt"
    icon: "neurology"
  - name: "Text to Speech"
    detail: "ElevenLabs v4 Turbo voice"
    icon: "record_voice_over"
  - name: "Web App"
    detail: "Next.js on Vercel with Better Auth, BotID and Resend sign-in"
    icon: "web"
  - name: "Hosting"
    detail: "Agent worker in Docker on a Hetzner VPS, no open ports"
    icon: "dns"
  - name: "Quality"
    detail: "LLM-judged behavioral evals and per-turn latency logging"
    icon: "fact_check"
keyLearnings:
  - title: "Full context beats retrieval for a small corpus"
    body: "Swapping per-turn keyword retrieval for my whole career material (~10k tokens) in the prompt took evals from 20/27 to 27/27. Follow-ups like \"What was the outcome?\" stopped being refused, for about +20 ms of time to first token thanks to prompt caching."
  - title: "Latency is the product in voice"
    body: "Every turn logs transcription delay, end-of-turn and model timings. Preemptive generation lets the LLM start while the turn detector is still deciding, so answers feel conversational instead of walkie-talkie."
  - title: "Guardrails that don't kill the conversation"
    body: "A small deterministic guard handles prompt injection and private data. Everything else, including small talk, is left to the model, which is grounded in approved material and always discloses it is an AI."
  - title: "Evals as the approval step"
    body: "Career material lives in Markdown, compiled into one corpus. The git diff is the review, and LLM-judged scenarios check it never invents numbers, corrects false premises and doesn't present general PM advice as lived experience."
quote: "The future is agents acting on our behalf across many areas of life."
liveUrl: "https://askdiogo.com"
tags: ["AI", "Voice"]
featured: true
order: 0
---
<a href="https://askdiogo.com" target="_blank" rel="noopener noreferrer">Ask Diogo</a> is a speech-only voice agent you can call from the browser to talk about Product Management with an AI version of me. It knows my career, the products I've worked on and what I care about, and answers the way I would, in short spoken replies.

Under the hood it's a chained real-time pipeline: speech-to-text, an LLM grounded in my approved career material, and text-to-speech, orchestrated by LiveKit. The agent runs as a container on a small VPS and connects out to LiveKit Cloud, while a Next.js app on Vercel handles the call page, email sign-in and call limits (free calls last 2:30, signed-in visitors get longer).

I treated it like a product, not a demo: behavioral evals judged by an LLM (hallucinations, false premises, follow-ups, prompt injection, AI disclosure), latency measured on every turn, and a deploy script that refuses to ship if the knowledge base is out of date.

Tools: **Claude Code**, **LiveKit**, **Vercel**

<!-- why -->

I have been interviewing for Product Management positions, and AI is now a regular part of the process on both sides, candidate and recruiter: automated CV screening, interview transcript analysis, adapting a CV to each role description, even interviews with an AI recruiter.

So I decided to build a voice agent that knows about my experience and interests, and can talk like me. If recruiters are going to use agents, candidates can too.
