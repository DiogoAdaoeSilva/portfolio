---
title: "Automating My Family Finance Report"
tagline: "Automated monthly finance report for a multi-bank household — parses statements, enriches transactions with AI, and delivers a Google Slides deck and email with a single command."
category: "Automation"
year: 2026
coverImage: "Screenshot_2026-04-14_at_10.23.16_cymvf1"
coverVideo: "Finance-Report-Creator-Apr-13-22-02-38_gil8pf"
coverVideoAutoplay: true                                                                                                   
coverVideoLoop: true 
techStack:
  - name: "Parser"
    detail: "Python 3.14+ with uv"
    icon: "terminal"
  - name: "AI Enrichment"
    detail: "Gemini API (gemini-3-flash-preview) for categorisation & narrative summary"
    icon: "smart_toy"
  - name: "Data Storage"
    detail: "Google Sheets API via service account"
    icon: "table_chart"
  - name: "Report & Delivery"
    detail: "Google Apps Script — slide deck generation and email dispatch"
    icon: "slideshow"
  - name: "Input Formats"
    detail: "PDF, XLSX, XLS (one per bank)"
    icon: "description"
keyLearnings:
  - title: "Gemini in Drive vs Gemini API"
    body: "The first attempt used the Gemini API directly in Google AI Studio to read and summarise documents from a Drive folder. While Gemini is great at summarizing files in Drive, I failed to produce reliable structured extraction from PDFs using the API. Moving to a Python parser gave full control over the extraction logic and made the output schema predictable."
  - title: "Polling Over Drive onChange Triggers"
    body: "Apps Script's time-driven trigger polls the Inbox every 5 minutes rather than reacting to a Drive onChange event. onChange is unavailable for standalone scripts, so polling was the only viable option — and it keeps the architecture simple with no webhook plumbing."
  - title: "Archiving report_data.json for Future Use"
    body: "The structured JSON output of each parsing run is archived rather than deleted. This preserves a queryable history of every month's transactions — useful for future agent layers or manual audits without re-parsing the original statements."
quote: "The best financial system is the one you actually use."
tags: ["Automation", "Python", "AI", "Finance"]
featured: true
order: 1
---
A personal automation that runs once a month: drop all bank statements into a Google Drive inbox, run a single command, and receive a polished Google Slides deck plus an email summary covering the full household's finances across multiple European banks.

The parser reads PDFs, XLSX, and XLS files — one format per bank — validates them, calls Gemini to categorise every transaction and write a narrative, updates a Google Sheets history database, and writes `report_data.json`. A time-driven Apps Script trigger picks up that file, fills a slide template with the data, refreshes linked charts, sends the email, and archives everything.

Possible next steps are automating file ingestion using open banking APIs and adding an agent layer to answer natural-language questions.

Tools: **Claude Code**, **Google AI Studio**, **Google Stitch**

<!-- why -->

Owning bank accounts across different countries makes it genuinely hard to get a consolidated picture of household finances. Updating a spreadsheet manually every month is the kind of task that starts disciplined and gradually stops happening. The goal here was a system that produces a shareable, visual summary with no manual data entry — something easy enough to actually run every month and presentable enough to share.
