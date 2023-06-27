"use client";

import { FilterTypeBrands } from "@/types/filter-brands";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  type: FilterTypeBrands.ALL,
  productCount: 0,
  productsOnLine: 5,
  setProductsOnLine: (value: number) => {},
  setProductCount: (value: number) => {},
  setSearch: (value: string) => {},
  setType: (value: FilterTypeBrands) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState(FilterTypeBrands.ALL);
  const [productCount, setProductCount] = useState(0);
  const [productsOnLine, setProductsOnLine] = useState(0);

  return (
    <FilterContext.Provider
      value={{
        productsOnLine,
        productCount,
        search,
        type,
        setSearch,
        setType,
        setProductCount,
        setProductsOnLine,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
