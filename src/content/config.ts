import { defineCollection, z } from "astro:content";

const reports = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.string(),
      updatedDate: z.string().optional(),
      heroImage: image()
        .refine((img) => img.width >= 240, {
          message: "Hero image must be at least 240px wide",
        })
        .optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { reports };
