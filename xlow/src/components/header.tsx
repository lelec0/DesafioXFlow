"use client";
import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { SearchInputWithIcon } from "./search-input";
import { CartInput } from "./cart-input";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
  background-color: var(--background-a);

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const LogoTag = styled.a`
  color: var(--select-orange);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`;

interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <HeaderTag>
      <LogoTag className={sairaStencil.className}>XLOW</LogoTag>
      <div>
        <SearchInputWithIcon />
        <CartInput />
      </div>
    </HeaderTag>
  );
}
