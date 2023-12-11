import type { ChangeEvent, Dispatch, SetStateAction } from "react";

import Link from "next/link";

import styles from "@/styles/_product.module.scss";

type Props = {
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export default function SearchProductForm({ setSearchValue }: Props) {
  return (
    <div className={styles.form}>
      <form>
        <div>
          <input
            className={styles.searchInput}
            id="search-product"
            placeholder="Search product"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
          />
        </div>
      </form>

      <div>
        <div className={styles.btn}>
          <Link href="/products/add">{`+ Add new product`}</Link>
        </div>
      </div>
    </div>
  );
}
