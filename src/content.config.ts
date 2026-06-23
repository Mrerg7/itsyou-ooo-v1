import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const siteCopy = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/siteCopy' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sections: z.array(
      z.object({
        id: z.string(),
        heading: z.string().optional(),
        content: z.string(),
        type: z.enum(['prose', 'quote', 'cta', 'heading-only']),
        attribution: z.string().optional(),
      })
    ),
  }),
});

export const collections = { siteCopy };
