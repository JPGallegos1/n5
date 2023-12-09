import useProducts from "@/hooks/useProducts";
import styles from "@/styles/_product.module.scss";

import Layout from "../layout";
import ProductCard from "../molecules/product-card";

export default function ProductsTemplate() {
  const { data, areProductsLoading } = useProducts();

  return (
    <Layout>
      <section>
        <div>
          <ul className={`${styles.productList}`}>
            {!areProductsLoading ? (
              data?.products.map((product) => (
                <li key={product.id}>
                  <ProductCard amount={product.amount} price={product.price} title={product.name} />
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
