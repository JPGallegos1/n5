import type { Fetcher } from "swr";

import useSWR from "swr";
import { useLocalStorage } from "usehooks-ts";
import { useEffect } from "react";

import { Product } from "@/types";

export const fetcher: Fetcher<Product[], string> = (...args) =>
  fetch(...args).then((res) => res.json());

export default function useProducts() {
  const [products, setProducts] = useLocalStorage<Product[]>("products", []);

  const { data, isLoading: areProductsLoading } = useSWR(
    "http://localhost:3000/api/products",
    fetcher,
  );

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data, setProducts]);

  return { products, areProductsLoading };
}
