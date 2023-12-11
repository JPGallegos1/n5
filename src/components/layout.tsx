import { useLocalStorage } from "usehooks-ts";
import Link from "next/link";

import styles from "@/styles/_utils.module.scss";
import Icon from "@/components/atoms/icon/index";
import useCart from "@/hooks/useCart";

import Navbar from "./molecules/navbar";
import Header from "./organisms/header";
import Logo from "./atoms/logo";
import Navigation from "./atoms/navigation";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [isDarkTheme, setDarkTheme] = useLocalStorage("darkTheme", false);
  const { cartItems } = useCart();

  const toggleTheme = () => {
    setDarkTheme((prevValue: boolean) => !prevValue);
    document.documentElement.setAttribute("data-theme", isDarkTheme ? "light" : "dark");
  };

  return (
    <>
      <Header>
        <Navbar>
          <div className={`${styles.flex} ${styles.justifyBetween} ${styles.alignCenter}`}>
            <Logo />

            <Navigation />

            <div className={`${styles.flex} ${styles.gap16} ${styles.alignCenter}`}>
              <div>
                <button
                  style={{
                    background: "none",
                    cursor: "pointer",
                    border: "none",
                  }}
                  onClick={toggleTheme}
                >
                  <Icon type={isDarkTheme ? "lightTheme" : "darkTheme"} />
                </button>
              </div>
              <Link href="/cart">
                <Icon type={cartItems.length > 0 ? "fullCart" : "emptyCart"} />
              </Link>
            </div>
          </div>
        </Navbar>
      </Header>

      <main>{children}</main>
    </>
  );
}
