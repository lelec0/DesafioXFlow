"use client";

import { FilterContext } from "@/contexts/filter-contexts";
import { useContext } from "react";
import { styled } from "styled-components";
import { FilterBrands } from "./filterBrands";
import { BlockIcon } from "./Icons/BlockIcon";

const MiddleBarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
  @media (max-width: 770px) {
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
  }
`;

const BlockContainer = styled.div`
  margin-right: 3px;
  display: inline-block;
`;

const ProductsCountDisplay = styled.div`
  align-items: start;
  width: 100%;
`;

const BlockCount = styled.div`
  cursor: pointer;
`;

const BigContainer = styled.div`
  cursor: pointer;
`;

export function MiddleBar() {
  const { productCount, productsOnLine, setProductsOnLine } =
    useContext(FilterContext);

  const handleProductsOnLineChange = () => {
    let newProductsOnLine = productsOnLine + 1;
    if (newProductsOnLine > 5) {
      newProductsOnLine = 2;
    }
    setProductsOnLine(newProductsOnLine);
  };

  const renderBlocks = () => {
    //const maxBlocks = Math.min(productsOnLine, 5);
    const maxBlocks = productsOnLine;
    const blocks = [];

    for (let i = 0; i < maxBlocks; i++) {
      blocks.push(
        <BlockContainer key={i}>
          <BlockIcon />
        </BlockContainer>
      );
    }

    return blocks;
  };

  const renderProductCount = () => {
    if (productCount === 0) {
      return "Nenhum produto encontrado";
    } else if (productCount === 1) {
      return "1 produto";
    } else {
      return `${productCount} produtos`;
    }
  };

  return (
    <>
      <MiddleBarContainer>
        <FilterBrands selected={false} />
        <BlockCount onClick={handleProductsOnLineChange}>
          {renderBlocks()}
        </BlockCount>
      </MiddleBarContainer>
      <ProductsCountDisplay>{renderProductCount()}</ProductsCountDisplay>
    </>
  );
}
