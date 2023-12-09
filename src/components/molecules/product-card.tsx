import styles from "@/styles/_product.module.scss";

type Props = {
  title: string;
  price: number;
  amount: number;
};

export default function ProductCard({ title, price, amount }: Props) {
  const handleBuyClick = () => {
    console.log(`Buying ${title} for $${price}`);
  };

  return (
    <div className={`${styles.productCard}`}>
      {/* <img src="product-image.jpg" alt="Product Image" className="product-image" /> */}
      <h2 className={`${styles.productTitle}`}>{title}</h2>
      <p className={`${styles.productPrice}`}>{`$${price}`}</p>
      <button className={`${styles.buyButton}`} onClick={handleBuyClick}>
        Add to cart
      </button>
    </div>
  );
}
