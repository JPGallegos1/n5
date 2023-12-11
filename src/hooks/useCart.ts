import { useLocalStorage } from "usehooks-ts";

import { Product } from "@/types";

export default function useCart() {
  const [cartItems, setCartItems] = useLocalStorage<Product[]>("cart", []);

  const handleCart = (product: Product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      const updateCartItems = [...cartItems];

      updateCartItems[index].amount += product.amount;
      updateCartItems[index].price += product.price;
      setCartItems(updateCartItems);
    } else {
      const updateCartItems = [...cartItems, product];

      setCartItems(updateCartItems);
    }
  };

  return { handleCart, cartItems, setCartItems };
}
