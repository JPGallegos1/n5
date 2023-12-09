// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { productData } from "@/services/products";
import { Products } from "@/types";

export default function handler(req: NextApiRequest, res: NextApiResponse<Products>) {
  res.status(200).json(productData);
}
