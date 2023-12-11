import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import styles from "@/styles/_product-form.module.scss";
import { productSchema, ProductSchema } from "@/schemas/product";
import useProducts from "@/hooks/useProducts";
import { Product } from "@/types";

export default function NewProductForm() {
  const [isProductExists, setIsProductExists] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
  });
  const { data: productsData } = useProducts();
  const [products, setProducts] = useLocalStorage<Product[]>("products", []);

  const onSubmit = (data: ProductSchema) => {
    const productsList =
      productsData && productsData.length < products.length ? products : productsData;
    const id = Math.max(...productsList!.map((product) => product.id), 0);

    const isProductExists = productsList!.find(
      (product) => product.name.toLowerCase() === data.name.toLowerCase(),
    );

    if (isProductExists) {
      setIsProductExists(true);
    } else {
      const newProduct: ProductSchema & { id: number } = {
        id: id + 1,
        amount: data.amount,
        name: data.name,
        price: data.price,
      };

      setIsProductExists(false);

      setProducts([...productsList!, newProduct]);
    }
  };

  return (
    <form className={styles.productForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label htmlFor="product-name" id="product-name">
          Product name
        </label>
        <input id="product-name" type="text" {...register("name")} autoComplete="off" />
        {isProductExists ? <span>{`Product's name is already taken.`}</span> : null}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="product-price" id="product-price">
          Price
        </label>
        <input id="product-price" type="text" {...register("price")} autoComplete="off" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="product-amount" id="product-amount">
          Amount
        </label>
        <input id="product-amount" type="text" {...register("amount")} autoComplete="off" />
      </div>

      <button className={styles.btn} disabled={!isValid} type="submit">{`Add product`}</button>
    </form>
  );
}
