import { useEffect } from "react";

import LandingTemplate from "@/components/templates/landing";

export default function Home() {
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();

      console.log({ data });
    };

    getProducts();
  }, []);

  return (
    <>
      <LandingTemplate />
    </>
  );
}
