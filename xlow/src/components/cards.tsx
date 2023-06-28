"use client";

import { FilterContext } from "@/contexts/filter-contexts";
import { requestProductList } from "@/hooks/data";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductCard } from "./product-card";
import { FilterTypeBrands } from "@/types/filter-brands";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;

  margin-top: 32px;
`;
export function Cards() {
  const [productList, setProductList] = useState<any[]>([]);
  const [baseList, setBaseList] = useState<any[]>([]);
  const { type, setProductCount, setProductsOnLine, setDatabaseProducts } =
    useContext(FilterContext);

  useEffect(() => {
    const handleProductList = async () => {
      const response = await requestProductList();
      setDatabaseProducts(response);
      setBaseList(response);
    };

    handleProductList();
  }, [setDatabaseProducts]);

  useEffect(() => {
    if (type === FilterTypeBrands.ALL) {
      setProductList(baseList);
      setProductCount(baseList.length);
    } else if (type === FilterTypeBrands.BRAND1) {
      const response1: { [key: string]: any }[] = baseList.filter(
        (obj: { [key: string]: any }) => obj.brand === "Marca 1"
      );
      setProductList(response1);
      setProductCount(response1.length);
    } else if (type === FilterTypeBrands.BRAND2) {
      const response2: { [key: string]: any }[] = baseList.filter(
        (obj: { [key: string]: any }) => obj.brand === "Marca 2"
      );
      setProductList(response2);
      setProductCount(response2.length);
    } else {
      const response3: { [key: string]: any }[] = baseList.filter(
        (obj: { [key: string]: any }) => obj.brand === "Marca 3"
      );
      setProductList(response3);
      setProductCount(response3.length);
    }
  }, [baseList, setProductCount, setProductsOnLine, type]);

  return (
    <ListContainer>
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
    </ListContainer>
  );
}
