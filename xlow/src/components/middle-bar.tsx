"use client";

import { styled } from "styled-components";
import { FilterBrands } from "./filterBrands";
import { BlockIcon } from "./Icons/BlockIcon";

const MiddleBarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`;

const BlockContainer = styled.div`
  margin-right: 3px;
  display: inline-block;
`;

const ProductsCountDisplay = styled.div`
  align-items: start;
  width: 100%;
`;

export function MiddleBar() {
  return (
    <>
      <MiddleBarContainer>
        <FilterBrands selected={false} />
        <div>
          <BlockContainer>
            <BlockIcon />
          </BlockContainer>
          <BlockContainer>
            <BlockIcon />
          </BlockContainer>
          <BlockContainer>
            <BlockIcon />
          </BlockContainer>
          <BlockContainer>
            <BlockIcon />
          </BlockContainer>
          <BlockContainer>
            <BlockIcon />
          </BlockContainer>
        </div>
      </MiddleBarContainer>
      <ProductsCountDisplay>5 produtos</ProductsCountDisplay>
    </>
  );
}
