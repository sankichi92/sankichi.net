import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const books = defineCollection({
  loader: glob({ base: "./src/content/books", pattern: "**/*.yml" }),
  schema: z.array(
    z.object({
      title: z.string(),
      author: z.string().optional(),
      asin: z.string(),
      date: z.coerce.date(),
    }),
  ),
});

export const collections = {
  books,
};
