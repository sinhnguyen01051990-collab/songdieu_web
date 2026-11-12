import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tinTuc = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tin-tuc' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    product: z.string().optional(),
  }),
});

export const collections = { tinTuc };
