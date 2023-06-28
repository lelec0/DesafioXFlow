"use client";

import { FilterContext } from "@/contexts/filter-contexts";
import { useContext, useEffect, useState } from "react";
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

  const [larguraDaJanela, setLarguraDaJanela] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setLarguraDaJanela(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Remova o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleProductsOnLineChange = () => {
    let newProductsOnLine = productsOnLine + 1;
    let maxSize = 5;
    if (larguraDaJanela < 440) {
      maxSize = 1;
    } else if (larguraDaJanela < 700) {
      maxSize = 2;
    } else if (larguraDaJanela < 910) {
      maxSize = 3;
    } else if (larguraDaJanela < 1200) {
      maxSize = 4;
    }

    if (newProductsOnLine > maxSize) {
      newProductsOnLine = 1;
    }
    setProductsOnLine(newProductsOnLine);
  };

  useEffect(() => {
    renderBlocks();
  }, [larguraDaJanela]);

  const renderBlocks = () => {
    //const maxBlocks = Math.min(productsOnLine, 5);
    let maxBlocks = productsOnLine;
    if (window.innerWidth < 440) {
      if (productsOnLine > 1) {
        maxBlocks = 1;
        setProductsOnLine(1);
      }
    } else if (window.innerWidth < 700) {
      if (productsOnLine > 2) {
        maxBlocks = 2;
        setProductsOnLine(2);
      }
    } else if (window.innerWidth < 910) {
      if (productsOnLine > 3) {
        maxBlocks = 3;
        setProductsOnLine(3);
      }
    } else if (window.innerWidth < 1200) {
      if (productsOnLine > 4) {
        maxBlocks = 4;
        setProductsOnLine(4);
      }
    }
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
