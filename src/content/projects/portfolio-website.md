---
title: "Vibe Coding Portfolio"
tagline: "A portfolio website built with Astro 6 and Claude Code — converting HTML design mockups into a fully functional, content-managed site."
category: "Web Development"
year: 2026
coverImage: "mockup-iphone_jetq7s"
techStack:
  - name: "Framework"
    detail: "Astro 6 with Content Layer API"
    icon: "rocket_launch"
  - name: "Styling"
    detail: "Tailwind CSS v3 with custom design system"
    icon: "palette"
  - name: "Media"
    detail: "Cloudinary for images and video"
    icon: "image"
  - name: "Deployment"
    detail: "Vercel with GitHub CI/CD"
    icon: "cloud_upload"
keyLearnings:
  - title: "Astro Content Collections"
    body: "Used Astro 6's Content Layer API with a glob loader and Zod schema to manage project content as Markdown files. Each project is a single .md file with structured frontmatter — no database needed."
  - title: "Cloudinary as a Media Layer"
    body: "Built reusable CloudinaryImage and CloudinaryVideo components that accept a public ID or full URL, apply automatic format and quality transforms, and support grayscale and autoplay modes."
  - title: "Design-to-Code with Claude Code"
    body: "The entire site was built by converting static HTML mockups (stitch files) into Astro components and pages using Claude Code — from bento grids to editorial archive layouts and a full-screen mobile nav."
  - title: "Client-side Filtering Without a Framework"
    body: "Implemented tag-based project filtering with vanilla JavaScript and data attributes, with the filter bar auto-appearing only when two or more distinct tags exist across projects."
quote: "If you have time, don't wait for time."
githubUrl: "https://github.com/DiogoAdaoeSilva/portfolio"
tags: ["Web"]
featured: true
order: 2
---
This portfolio is itself a vibecoding experiment — a fully custom website built from scratch using Astro 6, Tailwind CSS, and Cloudinary, with Claude Code as the primary development tool.

The site includes a home page with an asymmetric bento grid layout, a `/projects` archive with hover image reveals, individual project detail pages with media sections and key learnings, and an `/about` page. All content is managed through Markdown files with structured frontmatter — adding a new project means creating a single `.md` file.

The design was provided as static HTML mockups and converted into reusable Astro components, including a responsive navigation with a full-screen mobile drawer, adaptive overlay text using `mix-blend-mode: difference`, and a Cloudinary media pipeline supporting both images and autoplay video.

Tools: **Claude Code**, **Google Stitch**

<!-- why -->

I wanted a space to collect and showcase evening projects without the constraints of a template or a CMS. Building the portfolio itself as a vibecoding experiment felt like the right starting point — it is both the container and the first exhibit.

The constraint of converting static design files rather than designing from scratch pushed the focus onto implementation quality: responsive behaviour, media performance, content structure, and the developer experience of adding new projects quickly.
