"use client";

import { requestProductListById } from "@/hooks/data";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";

interface ProductCardProps {
  productId: number;
  image: string;
  productName: string;
  listPrice: number;
  bestPrice: number;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;

  width: 256px;

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
  }
`;

export function ProductCard(props: ProductCardProps) {
  const { listPrice, bestPrice } = props;
  const [promotion, setPromotion] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>();

  const oneProductHandle = async (id: number) => {
    const response = await requestProductListById(id);
    setSelectedProduct(response);
  };

  useEffect(() => {
    if (listPrice > bestPrice) {
      setPromotion(true);
    }
    oneProductHandle(props.productId);
  }, [props.productId, listPrice, bestPrice]);

  return (
    <Card>
      <Image src={props.image} alt={props.productName} />
      <h3>{props.productName}</h3>
      <div>fotinhas fofas</div>
      {promotion ? null : <span>{listPrice}</span>}
      <p>{bestPrice}</p>
    </Card>
  );
}
