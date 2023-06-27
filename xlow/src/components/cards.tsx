"use client";

import { FilterContext } from "@/contexts/filter-contexts";
import { requestProductList } from "@/hooks/data";
import { useContext, useEffect, useState } from "react";
import { ProductCard } from "./product-card";

export function Cards() {
  const [productList, setProductList] = useState<any[]>([]);

  async function fetchData() {
    try {
      const response = await fetch("http://desafio.xlow.com.br/search");

      if (!response.ok) {
        throw new Error("Erro ao fazer a requisição");
      }

      const data = await response.json();
      setProductList(data);
      console.log(data);
      // Faça o processamento dos dados recebidos da API aqui
    } catch (error) {
      console.error(error);
    }
  }

  const handleProductList = async () => {
    const response = await requestProductList();
    setProductList(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //  if (productList.length === 0) {
  //    return null; // Ou renderize uma mensagem de carregamento, por exemplo
  //  }
  console.log(productList);

  return (
    <>
      {productList.map((product) => (
        <ProductCard
          key={product.productId}
          productId={product.productId}
          image={product.image}
          productName={product.productName}
          listPrice={product.listPrice}
          bestPrice={product.bestPrice}
        />
      ))}
    </>
  );
}
