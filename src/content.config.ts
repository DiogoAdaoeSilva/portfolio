import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    /** Display string e.g. "Generative Core" */
    category: z.string(),
    year: z.number(),
    /** Cloudinary public ID for the cover image */
    coverImage: z.string(),
    /** Cloudinary public ID for an optional hero video */
    coverVideo: z.string().optional(),
    /** Orientation of the cover video — 'landscape' (16:9) or 'vertical' (9:16 phone recording) */
    coverVideoFormat: z.enum(['landscape', 'vertical']).default('landscape'),
    techStack: z.array(
      z.object({
        /** Section label, e.g. "Architecture" */
        name: z.string(),
        /** Tool/version detail, e.g. "Next.js 14 App Router" */
        detail: z.string(),
        /** Material Symbols icon name */
        icon: z.string(),
      })
    ).default([]),
    keyLearnings: z.array(
      z.object({
        title: z.string(),
        body: z.string(),
      })
    ).default([]),
    /**
     * Optional media sections placed between Tech Stack and Key Learnings.
     * Each section can be independently 'side-by-side' (2-col grid, square aspect)
     * or 'stacked' (full-width rows, video aspect).
     */
    mediaSections: z.array(
      z.object({
        layout: z.enum(['side-by-side', 'stacked']),
        items: z.array(
          z.object({
            publicId: z.string(),
            type: z.enum(['image', 'video']).default('image'),
            /** Autoplay like a GIF — forces muted, loops by default */
            autoplay: z.boolean().default(false),
            loop: z.boolean().default(true),
            /** Short prefix e.g. "Fig 01" or "Plate 01" */
            label: z.string().optional(),
            /** Bold title shown in stacked layout */
            title: z.string().optional(),
            /** Caption or description text */
            caption: z.string().optional(),
          })
        ),
      })
    ).default([]),
    /** Pull quote shown in the "The Why" section */
    quote: z.string().optional(),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    /** Tags used for homepage filtering e.g. ["RAG", "Local AI", "Python"] */
    tags: z.array(z.string()).default([]),
    /** Pin to the top of the homepage bento grid */
    featured: z.boolean().default(false),
    /** Lower = earlier in the sort order */
    order: z.number().default(99),
  }),
});

export const collections = { projects };
