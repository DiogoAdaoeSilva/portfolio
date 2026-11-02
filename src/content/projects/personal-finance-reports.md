---
title: "Family Finance Report"
tagline: "Automated monthly finance report for a multi-bank household — pulls balances and transactions through open banking, enriches them with AI, and emails a Google Slides deck on the 1st of every month with no files to download and no command to run."
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
  - name: "Bank Data"
    detail: "Enable Banking (PSD2 open banking) for six accounts; Coinbase CDP API for crypto"
    icon: "account_balance"
  - name: "Investment Prices"
    detail: "Yahoo Finance via yfinance, applied to recorded holdings"
    icon: "trending_up"
  - name: "AI Enrichment"
    detail: "Gemini API (gemini-3.8-flash) for categorisation & narrative summary"
    icon: "smart_toy"
  - name: "Data Storage"
    detail: "Google Sheets API via service account"
    icon: "table_chart"
  - name: "Report & Delivery"
    detail: "Google Apps Script — slide deck generation and email dispatch"
    icon: "slideshow"
  - name: "Scheduling"
    detail: "macOS launchd on the 1st, with daily retries until the 5th"
    icon: "schedule"
keyLearnings:
  - title: "Open Banking Over Statement Files"
    body: "The real monthly chore was logging in to six banks, downloading statements and renaming files. PSD2 access through Enable Banking removed it entirely. Statement parsers are kept as a fallback for a bank whose API fails, so one outage never blocks the report."
  - title: "Holdings Instead of Portfolio Exports"
    body: "PSD2 doesn't cover securities accounts, so investment quantities are seeded once from a portfolio export and kept current from the buy and sell transactions the bank API does return, then valued at market prices. Fineco's purchase descriptions abbreviate names and carry no ISIN — price per unit turned out to be the reliable way to match them to holdings."
  - title: "Bank APIs Don't Speak Like Their Exports"
    body: "The same transaction is worded differently by the API than in the downloaded statement — separate payer fields, no punctuation. Rules that excluded internal transfers had to be made insensitive to spacing and punctuation before they matched again."
  - title: "Running on the Mac, Not the Cloud"
    body: "Bank sessions and keys stay on one machine. A launchd job runs on the 1st and retries daily if a bank is down or the Mac was asleep; Apps Script emails me if the parser fails or no report has arrived by the 6th, so a missed month never goes unnoticed."
  - title: "Gemini in Drive vs Gemini API"
    body: "The first attempt used the Gemini API directly in Google AI Studio to read and summarise documents from a Drive folder. While Gemini is great at summarizing files in Drive, I failed to produce reliable structured extraction from PDFs using the API. Moving to a Python parser gave full control over the extraction logic and made the output schema predictable."
quote: ""
tags: ["Automation", "Python", "AI", "Finance"]
featured: true
order: 1
---
A personal automation that runs itself once a month: on the 1st, a scheduled job on my Mac pulls the previous month's balances and transactions from every household bank account across several European banks, and a polished Google Slides deck plus an email summary lands in both our inboxes — no statements to download, no command to run.

The parser fetches the data through open banking (Enable Banking) and the Coinbase API, values investments from recorded holdings at current market prices, excludes transfers between our own accounts, calls Gemini to categorise every transaction and write a narrative, updates a Google Sheets history database, and writes `report_data.json`. A time-driven Apps Script trigger picks up that file, fills a slide template with the data, refreshes linked charts, sends the email, and archives everything. If anything fails, I get an email instead of a silently missing report.

The pipeline started out driven by statement files: drop PDF, XLSX and XLS exports into a Drive inbox and run a command. Those parsers are still there as a fallback, but the manual monthly step is gone.

A possible next step is adding an agent layer on top of the archived monthly data to answer natural-language questions.

This tool has proven valuable and I use it every month. Interestingly, I have seen this Personal Finance type of product being launched by <a href="https://openai.com/index/personal-finance-chatgpt/" target="_blank" rel="noopener noreferrer">ChatGPT</a> and <a href="https://www.perplexity.ai/hub/blog/plaid-integration-provides-full-view-of-personal-finances" target="_blank" rel="noopener noreferrer">Perplexity</a> after I had mine in use.

Tools: **Claude Code**, **Google AI Studio**, **Google Stitch**

<!-- why -->

Owning bank accounts across different countries makes it genuinely hard to get a consolidated picture of household finances. Updating a spreadsheet manually every month is the kind of task that starts disciplined and gradually stops happening. The goal here was a system that produces a shareable, visual summary with no manual data entry — something easy enough to actually run every month and presentable enough to share.
