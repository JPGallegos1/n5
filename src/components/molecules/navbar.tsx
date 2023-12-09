import { Inter } from "next/font/google";

import styles from "@/styles/_header.module.scss";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

export default function Navbar({ children }: Props) {
  return <nav className={`${styles.navbar} ${inter.className}`}>{children}</nav>;
}
