import styles from "@/styles/_product.module.scss";
import { Product } from "@/types";
import { formatPrice } from "@/utils";

import useCart from "../../hooks/useCart";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { handleCart } = useCart();

  return (
    <div className={`${styles.productCard}`}>
      <h2 className={`${styles.productTitle}`}>Product: {product.name}</h2>
      <p className={`${styles.productPrice}`}>{`Price: $${formatPrice(product.price)}`}</p>
      <button className={`${styles.buyButton}`} onClick={() => handleCart(product)}>
        {`Add ${product.amount} to the cart`}
      </button>
    </div>
  );
}
