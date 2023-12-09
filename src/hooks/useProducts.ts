import type { Fetcher } from "swr";

import useSWR from "swr";

import { Products } from "@/types";

export const fetcher: Fetcher<Products, string> = (...args) =>
  fetch(...args).then((res) => res.json());

export default function useProducts() {
  const { data, isLoading: areProductsLoading } = useSWR(
    "http://localhost:3000/api/products",
    fetcher,
  );

  return { data, areProductsLoading };
}
