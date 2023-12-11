import { useState } from "react";
import { useDebounce, useLocalStorage } from "usehooks-ts";

import useProducts from "@/hooks/useProducts";
import styles from "@/styles/_product.module.scss";
import { Product } from "@/types";

import Layout from "../layout";
import ProductCard from "../molecules/product-card";
import SearchProductForm from "../molecules/forms/search-product";

export default function ProductsTemplate() {
  const { data: productsData, areProductsLoading } = useProducts();
  const [products, _] = useLocalStorage<Product[]>("products", []);
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce<string>(searchValue, 500);

  const productsList =
    productsData && productsData.length < products.length ? products : productsData;

  const filteredProducts = productsList?.filter((product) =>
    product.name.toLocaleLowerCase().includes(debouncedValue.toLocaleLowerCase()),
  );

  return (
    <Layout>
      <section>
        <div className={styles.container}>
          <SearchProductForm setSearchValue={setSearchValue} />
          <ul className={`${styles.productList}`}>
            {!areProductsLoading ? (
              filteredProducts?.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              ))
            ) : (
              <div>{`Loading...`}</div>
            )}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
