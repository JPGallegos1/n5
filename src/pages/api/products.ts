// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import Cors from "cors";

import { productData } from "@/services/products";
import { Product } from "@/types";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  await runMiddleware(req, res, cors);

  res.status(200).json(productData);
}
