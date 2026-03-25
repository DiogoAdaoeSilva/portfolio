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
    keyTakeaways: z.array(
      z.object({
        title: z.string(),
        body: z.string(),
      })
    ).default([]),
    /** Pull quote shown in the "The Why" section */
    quote: z.string().optional(),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    /** Pin to the top of the homepage bento grid */
    featured: z.boolean().default(false),
    /** Lower = earlier in the sort order */
    order: z.number().default(99),
  }),
});

export const collections = { projects };
