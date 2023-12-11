import styles from "@/styles/_product.module.scss";

import Layout from "../layout";
import NewProductForm from "../molecules/forms/new-product";

export default function NewProductTemplate() {
  return (
    <Layout>
      <section>
        <div className={styles.container}>
          <h2 className={styles.heading}>{`Add a new product to the list!`}</h2>
          <NewProductForm />
        </div>
      </section>
    </Layout>
  );
}
