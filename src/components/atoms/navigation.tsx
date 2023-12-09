import Link from "next/link";

import styles from "@/styles/atoms/_navigation.module.scss";

export default function Navigation() {
  const navigation = [{ title: "Products", path: "/products" }];

  return (
    <ul className={`${styles.navigation}`}>
      <div className={`${styles.navigationContainer}`}>
        {navigation.map((item, idx) => (
          <li key={idx} className={`${styles.link}`}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </div>
    </ul>
  );
}
