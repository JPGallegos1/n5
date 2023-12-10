import Link from "next/link";

import useCart from "@/hooks/useCart";
import styles from "@/styles/_product.module.scss";
import { formatPrice, totalPrice } from "@/utils";

import Layout from "../layout";
import ProductCard from "../molecules/product-card";

export default function CartTemplate() {
  const { cartItems, setCartItems } = useCart();

  const total = totalPrice(cartItems);

  return (
    <Layout>
      <section id="cart-page">
        <div className={styles.container}>
          {cartItems.length > 0 ? (
            <div>
              <h2>{`Total on Cart: $${formatPrice(total)}`}</h2>
              <div>
                <div className={styles.btn}>
                  <button onClick={() => setCartItems([])}>{`Clear cart`}</button>
                </div>
              </div>
            </div>
          ) : null}
          <ul className={`${cartItems.length > 0 ? styles.productList : styles.emptyCart}`}>
            {cartItems.length > 0 ? (
              cartItems?.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              ))
            ) : (
              <div className={styles.error}>
                <h2>{`There's no products here!`}</h2>
                <div>
                  <div className={styles.btn}>
                    <Link href="/products">{`Explore products`}</Link>
                  </div>
                </div>
              </div>
            )}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
