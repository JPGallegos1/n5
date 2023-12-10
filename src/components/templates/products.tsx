import { useState } from "react";
import { useDebounce } from "usehooks-ts";

import useProducts from "@/hooks/useProducts";
import styles from "@/styles/_product.module.scss";

import Layout from "../layout";
import ProductCard from "../molecules/product-card";
import SearchProductForm from "../molecules/forms/search-product";

export default function ProductsTemplate() {
  const { products, areProductsLoading } = useProducts();
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce<string>(searchValue, 500);
  const filteredProducts = products.filter((product) =>
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
