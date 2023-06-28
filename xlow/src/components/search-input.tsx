import { useContext, useDeferredValue } from "react";
import { styled } from "styled-components";
import { SearchIcon } from "./Icons/searchIcon";
import { FilterContext } from "@/contexts/filter-contexts";

const SearchInput = styled.input`
  width: 352px;
  border-radius: 8px;

  padding: 10px 16px;

  background-color: white;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--support-text);
`;

const SearchInputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 30px;
    top: 10px;
  }
`;

export function SearchInputWithIcon() {
  const { setSearch } = useContext(FilterContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // considerar ultilizar o deferredValue por timeOut
  //const deferredValue = useDeferredValue("");

  return (
    <SearchInputContainer>
      <SearchInput placeholder="Procurando por algo?" onChange={handleChange} />
      <SearchIcon />
    </SearchInputContainer>
  );
}
