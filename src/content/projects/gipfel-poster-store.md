---
title: "Gipfel Prints"
tagline: "A poster store built with Shopify's Catalog and TypeSafe's model to find the best matches: posters of Alpine towns and ski resorts."
category: "AI-Curated Commerce"
year: 2026
coverImage: "gipfel/screenshot"
browserShot:
  publicId: "gipfel/screenshot"
  url: "https://www.gipfelprints.com"
techStack:
  - name: "Product Search"
    detail: "Shopify Catalog API across the vendors' Shopify stores"
    icon: "travel_explore"
  - name: "Cart and Checkout"
    detail: "Shop MCP for carts, checkout and Shop sign-in, no products of my own"
    icon: "shopping_cart"
  - name: "Curation"
    detail: "TypeSafe (Jev) answers typed questions about every listing image"
    icon: "rule"
  - name: "Decision Rules"
    detail: "Plain JavaScript keep, review and reject rules over TypeSafe's probabilities"
    icon: "account_tree"
  - name: "Automation"
    detail: "Weekly GitHub Actions job re-curates and commits the selection"
    icon: "schedule"
  - name: "Hosting"
    detail: "Static page and serverless API on Vercel, prices and stock fetched live"
    icon: "cloud"
keyLearnings:
  - title: "Search finds candidates, not the shelf"
    body: "A catalog search for \"Zermatt poster\" returns magnets, canvases, mugs, photos and watermarked previews next to the prints I want. Search gets you close; a judge decides what actually makes it to the page."
  - title: "Ask small typed questions, decide in code"
    body: "Instead of one prompt asking \"is this a good poster?\", TypeSafe answers narrow questions about each image: what product it is, illustration or photo, watermark, sales badge, whether it shows the place. The keep/reject rules live in code, so they're readable and easy to change."
  - title: "Probabilities make the grey zone explicit"
    body: "Every answer comes back with a calibrated probability. Above 0.7 reads as yes, below 0.3 as no, and anything in between goes to a review list instead of the store, like poster lettering that might be a watermark."
  - title: "Judge once, re-apply rules forever"
    body: "Answers are stored per place and product, so a weekly run only sends new listings to TypeSafe. Changing a rule doesn't require judging again: the rules are re-applied to stored answers every run."
quote: "A page that shows exactly the kind of items I was interested in."
liveUrl: "https://www.gipfelprints.com"
tags: ["AI", "E-commerce"]
featured: true
order: -1
---
<a href="https://www.gipfelprints.com" target="_blank" rel="noopener noreferrer">Gipfel Prints</a> is a poster store for mountain towns, peaks and ski resorts in the Alps, from Zermatt and Chamonix to Cortina and St. Anton. It has no products of its own: every print belongs to an independent vendor's Shopify store, and search, cart and checkout all go through them.

The page only shows posters that passed a judge. A curation script searches Shopify's Catalog for every place, and asks TypeSafe a set of typed questions about each candidate's image: is it a paper wall print or a magnet, canvas or mug? Illustration or photograph? Is there a watermark or a SALE sticker on it? Does it actually show the place? Simple rules in code turn those answers into keep, review or reject, and up to eight approved prints per place make it into the store. Places with nothing good enough are left out.

The selection is refreshed every Monday by a GitHub Actions job, which only judges listings it hasn't seen before and redeploys on Vercel when the shelf changes. Prices and stock are always fetched live from the vendors.

Tools: **Claude Code**, **Shopify Catalog**, **TypeSafe**, **Vercel**

<!-- why -->

I wanted to experiment with <a href="https://www.shopify.com/catalog" target="_blank" rel="noopener noreferrer">Shopify's Catalog</a> and <a href="https://shop.dev" target="_blank" rel="noopener noreferrer">Shop's developer tools</a>, which open up products from millions of Shopify merchants to anyone building a store or an agent.

The cool thing is that it became an opportunity to use TypeSafe's model to categorize the search results. That way I have a page that shows exactly the kind of items I was interested in: prints from mountain towns and ski resorts in the Alps.
