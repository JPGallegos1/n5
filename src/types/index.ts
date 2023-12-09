export interface Product {
  name: string;
  price: number;
  amount: number;
  id: number;
}

export type Products = {
  products: Product[];
};
