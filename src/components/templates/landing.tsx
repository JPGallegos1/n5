import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/_landing.module.scss";

import Layout from "../layout";

export default function LandingTemplate() {
  return (
    <Layout>
      <section className={styles.section} id="landing-page">
        <div className={styles.container}>
          <div className={styles.box}>
            <h2>{`Indulge in Culinary Delights at The Great Food Market`}</h2>
            <p>{`Welcome to a bustling paradise of flavors and aromas. The Great Food Market tantalizes your taste buds with an array of global cuisines. From sizzling street food to fresh, vibrant produce, immerse yourself in a gastronomic adventure. Discover authenticity, mingle with passionate chefs, and savor every moment in a celebration of delicious diversity`}</p>
            <div className={styles.btn}>
              <Link href="/products">{`See all products`}</Link>
            </div>
          </div>
          <div className={styles.hero}>
            <Image alt="Market's image" height={200} src="/market.webp" width={400} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
