---
title: "Ecommerce QA Automation"
tagline: "A Playwright dashboard that automates Shopify checkout flows across B2B, B2C, and POS channels — replacing slow manual end-to-end testing. Work in progress."
category: "QA Automation"
year: 2026
coverImage: "ca247f"
techStack:
  - name: "Browser Automation"
    detail: "Playwright (headless Chromium)"
    icon: "play_circle"
  - name: "Frontend"
    detail: "React + Vite + Tailwind CSS + Shadcn UI"
    icon: "web"
  - name: "Backend"
    detail: "Express.js + Node.js + PostgreSQL via Drizzle ORM"
    icon: "database"
  - name: "AI"
    detail: "OpenAI for test failure interpretation"
    icon: "smart_toy"
mediaSections:
  - layout: "stacked"
    items:
      - publicId: "QA_App_demo1_kfpyun"
        type: "video"
        autoplay: false
        loop: false
        label: "Demo"
        caption: "QA Automation App Demo"
keyLearnings:
  - title: "Shopify Checkout Quirks"
    body: "Shopify's payment fields are rendered inside iframes, which Playwright's native iframe API doesn't reliably fill. The solution was to use mouse.click() on iframe bounding boxes combined with keyboard.type() — a workaround that highlights how automation must adapt to the target platform's internals."
  - title: "JSON-Driven Test Scenarios"
    body: "Test scenarios are defined as JSON config objects covering URL, credentials, product, shipping, payment, and custom selectors. This makes it easy to add new test cases without touching the automation engine — a separation of test logic from test data."
  - title: "AI-Powered Failure Interpretation"
    body: "When a test step fails, the run is passed to OpenAI to generate a plain-language summary of what went wrong. This reduces the time needed to triage failures, especially for non-technical stakeholders reviewing test results."
  - title: "Form Interaction Edge Cases"
    body: "Shopify reloads the address form when the country field changes, so country must be set before all other fields. A fillOrSelect helper handles both input and select elements. The Add-to-Cart button is hidden and sticky — requiring JS evaluate() to click the correct one rather than a standard selector."
quote: "A small leak will sink a great ship."
githubUrl: "https://github.com/DiogoAdaoeSilva/ecommerce-qa-automation"
tags: ["Automation", "QA"]
featured: true
order: 3
---
A web dashboard for automating end-to-end QA testing of Shopify stores across three checkout flows: DTC (Direct to Consumer), B2B (Business to Business), and POS (Point of Sale). Test scenarios are defined as JSON configurations and executed by a Playwright engine running headless Chromium, with results stored in PostgreSQL and surfaced through a React dashboard.

The dashboard provides a test run history, per-step timelines, and AI-generated failure summaries powered by OpenAI. Scenarios are fully configurable: target URL, storefront password gate, guest or logged-in checkout, direct product URL, shipping address, payment details, and custom CSS selectors per step.

**Status: Work in progress.** The current version covers the full order placement flow. The next phase is returns handling — automating the post-order flow to complete the end-to-end QA cycle.

Tools: **Claude Code**, **Replit**

<!-- why -->

In my last job, end-to-end testing meant manually placing orders on a staging store — navigating through the full checkout flow for each scenario, on each release. It worked, but it consumed time that could have been spent on higher-value work.

This project started as a way to automate that exact process. The goal was simple: run a test suite that covers the critical purchase paths and surfaces failures clearly, without anyone needing to open a browser manually.
