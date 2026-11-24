import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cases = defineCollection({
  loader: glob({ base: './src/content/cases', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    role: z.string(),
    period: z.string(),
    methods: z.array(z.string()),
    contribution: z.string(),
    outcome: z.string(),
    limitations: z.string(),
    featuredOrder: z.number().int().positive(),
    publicationStatus: z.enum(['public', 'private-demo']),
    art: z.enum(['brightness', 'sankan', 'foldable', 'yunyou', 'listing']),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { cases };
