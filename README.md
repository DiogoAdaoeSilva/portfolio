# VIBE — Portfolio Template

A minimal, editorial portfolio built with **Astro** and **Tailwind CSS**. Designed for developers who want to showcase coding experiments and side projects with a clean, magazine-inspired aesthetic.

**[Use this template](../../generate)** to create your own portfolio in minutes.

![Astro](https://img.shields.io/badge/Astro-6.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Bento grid homepage** — asymmetric card layout that adapts from multi-column on desktop to single-column on mobile
- **Project case studies** — markdown-driven pages with structured metadata (tech stack, media sections, key learnings)
- **Cloudinary media** — responsive images and videos via Cloudinary with lazy loading, 2x srcset, and automatic format selection
- **Tag filtering** — client-side filter bar on both the homepage and archive, shown automatically when 2+ tags exist
- **Fluid typography** — `clamp()`-based headings that scale smoothly across viewports
- **Material Design 3 color system** — a neutral, editorial palette defined as Tailwind tokens
- **Zero client-side framework** — pure Astro with minimal vanilla JS (filtering + mobile nav)
- **Mobile-first responsive** — hamburger drawer nav, stacked layouts, and touch-friendly targets

## Project Structure

```
src/
├── components/
│   ├── CloudinaryImage.astro   # Responsive Cloudinary image with srcset
│   ├── CloudinaryVideo.astro   # Cloudinary video with poster overlay
│   ├── Footer.astro
│   ├── Nav.astro               # Fixed nav with mobile drawer
│   ├── ProjectCard.astro       # Bento grid card
│   └── ProjectMediaSection.astro  # Side-by-side or stacked media
├── content/
│   └── projects/
│       └── your-project.md     # Add your projects here
├── layouts/
│   ├── BaseLayout.astro        # HTML shell, fonts, meta tags
│   └── ProjectLayout.astro     # Wraps BaseLayout for case studies
├── pages/
│   ├── index.astro             # Homepage with bento grid
│   ├── about.astro             # About page
│   └── projects/
│       ├── index.astro         # Archive list
│       └── [slug].astro        # Dynamic case study pages
├── styles/
│   └── global.css              # Tailwind directives + base styles
└── content.config.ts           # Zod schema for project collection
```

## Quick Start

### Prerequisites

- Node.js >= 22.12.0
- A [Cloudinary](https://cloudinary.com) account (free tier works)

### Setup

```bash
# 1. Create your repo from this template (click "Use this template" above)
#    then clone it locally

# 2. Install dependencies
npm install

# 3. Configure Cloudinary
#    Create a .env file in the root:
echo "PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name" > .env

# 4. Start the dev server
npm run dev
```

The site will be available at `http://localhost:4321`.

## Adding a Project

Create a new markdown file in `src/content/projects/`:

```markdown
---
title: "Project Name"
tagline: "One-line description of the project."
category: "Category"
year: 2026
coverImage: "your-cloudinary-image-id.jpg"
techStack:
  - name: "Tool"
    detail: "Version or description"
    icon: "material_symbol_name"
mediaSections:
  - layout: "side-by-side"    # or "stacked"
    items:
      - publicId: "image-id.jpg"
        label: "Fig 01"
        caption: "Description"
      - publicId: "video-id.mp4"
        type: "video"
        autoplay: true
        loop: true
        label: "Fig 02"
        caption: "Description"
keyLearnings:
  - title: "Lesson Title"
    body: "What you learned"
quote: "Optional pull quote for The Why section"
githubUrl: "https://github.com/you/repo"
tags: ["Tag1", "Tag2"]
featured: true
order: 1
---
Description of what you built (appears in "The What" section).

<!-- why -->

Why you built it (appears in "The Why" section).
```

All fields except `title`, `tagline`, `category`, `year`, and `coverImage` are optional. See `src/content.config.ts` for the full schema.

## Customization

### Colors

Edit `tailwind.config.mjs` to change the Material Design 3 color tokens. The palette is neutral by default — swap in your own brand colors.

### Fonts

The template uses [Inter](https://rsms.me/inter/) loaded from Google Fonts. To change it, update the `<link>` tags in `src/layouts/BaseLayout.astro` and the `fontFamily` entries in `tailwind.config.mjs`.

### Cloudinary

Images and videos are served via Cloudinary for automatic format conversion, resizing, and CDN delivery. Upload your media to Cloudinary and reference them by their public ID in the project frontmatter.

If you prefer local images, replace the `CloudinaryImage` and `CloudinaryVideo` components with standard `<img>` / `<video>` tags using Astro's built-in image optimization.

## Commands

| Command             | Action                                      |
| :------------------ | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start dev server at `localhost:4321`        |
| `npm run build`     | Build production site to `./dist/`          |
| `npm run preview`   | Preview production build locally            |

## Making It Your Own

1. Replace the content in `src/content/projects/` with your own projects
2. Update `src/pages/about.astro` with your name, bio, and contact info
3. Update the footer links in `src/components/Footer.astro` (GitHub, LinkedIn)
4. Upload your media to Cloudinary and set your cloud name in `.env`
5. Adjust colors in `tailwind.config.mjs` to match your brand

## License

MIT
