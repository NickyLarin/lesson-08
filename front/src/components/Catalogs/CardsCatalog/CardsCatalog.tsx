import "./CardsCatalog.css";
import { SimpleCard } from "./SimpleCard/SimpleCard";
import block from "bem-cn";
import React from "react";

interface CatalogItem {
  title: string;
  img: string;
  href: string;
}

interface Props {
  items: Array<CatalogItem>;
}

const b = block("cards-catalog");

export const CardsCatalog: React.FC<Props> = ({ items }) => {
  const cards = [];
  for (let item of items) {
    cards.push(<SimpleCard title={item.title} img={item.img} href={item.href} />);
  }
  return <div className={b()}>{cards}</div>;
};
