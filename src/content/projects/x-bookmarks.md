---

title: "Daily X Bookmarks Feed"
tagline: "Fetch X bookmarks, classify them with AI, and receive a curated daily digest on Telegram."
category: "Automation Pipeline"
year: 2026
coverImage: "hero_imageXbookmarks_nexqgt"
techStack:
  - name: "Data Source"
    detail: "X API with OAuth 2.0 PKCE authentication"
    icon: "cloud_download"
  - name: "Classification"
    detail: "Gemini API for topic, summary, and priority tagging"
    icon: "smart_toy"
  - name: "Delivery"
    detail: "Telegram Bot API for daily bookmark digests"
    icon: "send"
  - name: "Automation"
    detail: "GitHub Actions for weekly refresh and daily delivery"
    icon: "schedule"
mediaSections:
  - layout: "stacked"
    items:
      - publicId: "xbookmarks_xayxy6"
        type: "video"
        autoplay: true
        loop: true
        label: "Demo"
        caption: "I now receive a daily selection of 3 of my X (Twitter) bookmarked posts in Telegram"
keyLearnings:
  - title: "OAuth 2.0 PKCE Flow"
    body: "Implemented the full OAuth 2.0 PKCE flow for X API authentication, with token caching locally and refresh token handling in CI."
  - title: "LLM-Powered Classification"
    body: "Used Gemini to automatically classify bookmarks by topic, generate summaries, and assign priority levels for smarter delivery."
  - title: "Stateful Pipeline Design"
    body: "Designed a pipeline with separate state files for fetch progress, classification, and delivery tracking to ensure idempotent and resumable runs."
  - title: "GitHub Actions CI/CD"
    body: "Set up two automated workflows: a weekly refresh that fetches and classifies new bookmarks, and a daily job that delivers them via Telegram."
tags: ["Automation", "AI"]
featured: true
order: 3

---

A fully automated pipeline that fetches my bookmarks from X, classifies them using Gemini, and delivers a curated daily digest of up to 3 bookmarks via Telegram.

The pipeline runs in two recurring jobs. A weekly refresh fetches newly bookmarked posts from X using OAuth 2.0 PKCE, classifies them with Gemini (adding topic, summary, and priority), and merges them into the main dataset. A daily delivery job selects the top unsent bookmarks — highest priority first, oldest first within the same priority — formats them into a single Telegram message, and marks them as sent.

The project runs locally with `uv` and is fully automated via GitHub Actions, with workflows that commit updated state files back to the repo after each run.

Tools: **Claude Code**, **GitHub Actions**, **Telegram Bot**

<!-- why -->

I bookmark a lot of posts on X (previously Twitter) but rarely go back to read them. This project turns that passive habit into an active one: every day I get a Telegram message with a few bookmarks worth revisiting, already classified and prioritized by an LLM. It's a personal information diet — instead of doom-scrolling, I get a curated nudge with the content that matters most.