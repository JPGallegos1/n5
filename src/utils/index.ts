import { Product } from "@/types";

export function formatPrice(price: number) {
  return price?.toLocaleString("es-AR");
}

export function totalPrice(cartItems: Product[]) {
  return cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);
}
