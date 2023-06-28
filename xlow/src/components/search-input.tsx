import { styled } from "styled-components";
import { SearchIcon } from "./Icons/searchIcon";

export const SearchInput = styled.input`
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
  return (
    <SearchInputContainer>
      <SearchInput placeholder="Locking For Something?" />
      <SearchIcon />
    </SearchInputContainer>
  );
}
