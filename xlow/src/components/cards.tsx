"use client";

import { FilterContext } from "@/contexts/filter-contexts";
import { requestProductList } from "@/hooks/data";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductCard } from "./product-card";
import { FilterTypeBrands } from "@/types/filter-brands";

export function Cards() {
  const [productList, setProductList] = useState<any[]>([]);
  const [baseList, setBaseList] = useState<any[]>([]);
  const {
    type,
    search,
    setProductCount,
    productsOnLine,
    setProductsOnLine,
    setDatabaseProducts,
  } = useContext(FilterContext);
  //console.log(window.innerWidth);

  if (window.innerWidth < 440) {
    if (productsOnLine > 1) {
      setProductsOnLine(1);
    }
  } else if (window.innerWidth < 700) {
    if (productsOnLine > 2) {
      setProductsOnLine(2);
    }
  } else if (window.innerWidth < 910) {
    if (productsOnLine > 3) {
      setProductsOnLine(3);
    }
  } else if (window.innerWidth < 1200) {
    if (productsOnLine > 4) {
      setProductsOnLine(4);
    }
  }

  const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${productsOnLine}, 1fr);
    grid-gap: 32px;
    margin-top: 32px;
  `;

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
  let filteredProducts = [];
  if (productList) {
    filteredProducts = productList.filter((product) => {
      const productName = product.productName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return productName.includes(search);
    });
    setProductCount(filteredProducts.length);
  }

  return (
    <ListContainer className="cardFofinhos">
      {filteredProducts.map((product) => (
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
