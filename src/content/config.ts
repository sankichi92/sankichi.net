import { defineCollection, z } from "astro:content";

const books = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      author: z.string(),
      asin: z.string(),
      date: z.date(),
    })
  ),
});

export const collections = {
  books: books,
};
