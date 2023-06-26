"use client";
import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { SearchInput } from "./search-input";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
`;
const LogoTag = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`;

interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <HeaderTag>
      <LogoTag className={sairaStencil.className}>XLOW</LogoTag>
      <SearchInput />
    </HeaderTag>
  );
}
