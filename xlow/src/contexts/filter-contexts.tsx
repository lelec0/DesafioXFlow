import { FilterTypeBrands } from "@/types/filter-brands";
import { ReactNode, createContext, useState } from "react";

// Defina a interface para o contexto
interface FilterContextProps {
  search: string;
  type: FilterTypeBrands;
  productCount: number;
  productsOnLine: number;
  shoppingList: number[];
  databaseProducts: any; // Ou `unknown`
  setProductsOnLine: (value: number) => void;
  setProductCount: (value: number) => void;
  setSearch: (value: string) => void;
  setType: (value: FilterTypeBrands) => void;
  setShoppingList: (value: any) => void;
  setDatabaseProducts: (value: any) => void; // Ou `unknown`
}

// Crie o contexto
export const FilterContext = createContext<FilterContextProps>({
  search: "",
  type: FilterTypeBrands.ALL,
  productCount: 0,
  productsOnLine: 5,
  shoppingList: [],
  databaseProducts: [],
  setProductsOnLine: (value: number) => {},
  setProductCount: (value: number) => {},
  setSearch: (value: string) => {},
  setType: (value: FilterTypeBrands) => {},
  setShoppingList: (value: any) => {},
  setDatabaseProducts: (value: any) => {}, // Ou `unknown`
});

// Defina as propriedades do provedor do contexto
interface ProviderProps {
  children: ReactNode;
}

// Crie o provedor do contexto
export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState(FilterTypeBrands.ALL);
  const [productCount, setProductCount] = useState(0);
  const [productsOnLine, setProductsOnLine] = useState(4);
  const [shoppingList, setShoppingList] = useState<any>([]);
  const [databaseProducts, setDatabaseProducts] = useState<any>([]); // Ou `unknown`

  return (
    <FilterContext.Provider
      value={{
        productsOnLine,
        productCount,
        search,
        type,
        shoppingList,
        databaseProducts,
        setSearch,
        setType,
        setProductCount,
        setProductsOnLine,
        setShoppingList,
        setDatabaseProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
