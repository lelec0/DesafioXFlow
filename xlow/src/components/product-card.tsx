"use client";

import { requestProductListById } from "@/hooks/data";
import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";
import { FilterContext } from "@/contexts/filter-contexts";

interface ProductCardProps {
  productId: number;
  image: string;
  productName: string;
  listPrice: number;
  bestPrice: number;
}

interface Item {
  itemId: string;
  name: string;
  measurementUnit: string;
  unitMultiplier: number;
  images: Image[];
}

interface Image {
  imageUrl: string;
  imageText: string;
}

const cardWidth = "200px";
const cardHeight = `calc(${cardWidth} * 1.15)`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;

  width: 100%;

  img {
    width: ${cardWidth};
    height: ${cardHeight};
  }

  h3 {
    font-weight: 200;
    font-size: 14px;
    line-height: 100%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
  }

  span {
    font-size: 10px;
    text-decoration: line-through;
    height: 15px;
  }
`;
const CardButton = styled.div`
  background-color: white;
  border: 1px solid brown;
  border-radius: 4px; /* Adiciona a propriedade border-radius */
  padding: 10px 10px;
  font-size: 14px;
  color: black;
  cursor: pointer;
`;

const cardWidth2 = `calc(${cardWidth} * 0.3)`;
const cardHeight2 = `calc(${cardHeight} * 0.3)`;

const SecondImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  img {
    width: ${cardWidth2};
    height: ${cardHeight2};
    margin: 0 2px;
    cursor: pointer;
  }
`;

export function ProductCard(props: ProductCardProps) {
  const { listPrice, bestPrice } = props;
  const [promotion, setPromotion] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>();
  const { shoppingList, setShoppingList } = useContext(FilterContext);
  const [showImage, setShowImage] = useState("");
  const [showText, setShowText] = useState("");

  const oneProductHandle = async (id: number) => {
    const response = await requestProductListById(id);
    setSelectedProduct(response);
  };

  useEffect(() => {
    setShowImage(props.image);
  }, [props.image]);

  useEffect(() => {
    if (listPrice > bestPrice) {
      setPromotion(true);
    }
    oneProductHandle(props.productId);
  }, [props.productId, listPrice, bestPrice]);

  const monetaryValueList = (listPrice / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const monetaryValueBest = (bestPrice / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleShoppingCartChange = () => {
    setShoppingList([...shoppingList, props.productId]);
  };
  const handleImageChange = (img: string) => {
    setShowImage(img);
  };

  return (
    <Card>
      <img src={showImage} alt={props.productName} />
      <h3>{props.productName}</h3>
      <SecondImageWrapper>
        {selectedProduct &&
          selectedProduct.items &&
          selectedProduct.items.map((item: Item) => (
            <img
              src={item.images[0].imageUrl}
              onClick={handleImageChange.bind(null, item.images[0].imageUrl)}
            />
          ))}
      </SecondImageWrapper>
      {promotion ? <span>{monetaryValueList}</span> : <span></span>}
      <p>{monetaryValueBest}</p>
      <CardButton onClick={handleShoppingCartChange}>Comprar</CardButton>
    </Card>
  );
}

/*
        {selectedProduct &&
          selectedProduct.items &&
          selectedProduct.items.map((item: Item) => (
            <img src={item.images[0].imageUrl} />
          ))}
          */
