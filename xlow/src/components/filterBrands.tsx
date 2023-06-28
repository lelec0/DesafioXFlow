"use client";

import { FilterContext } from "@/contexts/filter-contexts";
import { FilterTypeBrands } from "@/types/filter-brands";
import { useContext, useState } from "react";
import { styled } from "styled-components";

interface FilterBrandsProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

const FilterItem = styled.li<FilterBrandsProps>`
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  color: var(--text-dark);

  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--select-orange)" : ""};
`;

export function FilterBrands(props: FilterBrandsProps) {
  const { type, setType } = useContext(FilterContext);

  const handleChangeType = (value: FilterTypeBrands) => {
    setType(value);
  };
  return (
    <FilterList>
      <FilterItem
        selected={type === FilterTypeBrands.ALL}
        onClick={() => handleChangeType(FilterTypeBrands.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterTypeBrands.BRAND1}
        onClick={() => handleChangeType(FilterTypeBrands.BRAND1)}
      >
        Marca 1
      </FilterItem>
      <FilterItem
        selected={type === FilterTypeBrands.BRAND2}
        onClick={() => handleChangeType(FilterTypeBrands.BRAND2)}
      >
        Marca 2
      </FilterItem>
      <FilterItem
        selected={type === FilterTypeBrands.BRAND3}
        onClick={() => handleChangeType(FilterTypeBrands.BRAND3)}
      >
        Marca 3
      </FilterItem>
    </FilterList>
  );
}
