import type { Fetcher } from "swr";

import useSWR from "swr";

import { Product } from "@/types";

export const fetcher: Fetcher<Product[], string> = (...args) =>
  fetch(...args).then((res) => res.json());

export default function useProducts() {
  const { data, isLoading: areProductsLoading } = useSWR(
    "http://localhost:3000/api/products",
    fetcher,
  );

  return { data, areProductsLoading };
}
