import { useLocalStorage } from "@/hooks/useLocalStorage";
import { styled } from "styled-components";
import { CartIcon } from "./Icons/cartIcon";

const CartContainer = styled.div`
  position: relative;
`;
const CartNumber = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 10px;

  background-color: var(--background-red);
  color: white;

  margin-left: -10px;
`;

export function CartInput() {
  const { value } = useLocalStorage("cart-items");
  return (
    <CartContainer>
      <CartIcon />
      {value.length && <CartNumber>{value.length}</CartNumber>}
    </CartContainer>
  );
}
