import { z } from "zod";

export const productSchema = z.object({
  name: z.string().max(15, { message: "The product's name should be shorter" }),
  price: z.coerce.number().positive({ message: "It should be a positive number" }),
  amount: z.coerce.number().positive({ message: "It should be a positive number" }),
});

export type ProductSchema = z.infer<typeof productSchema>;
