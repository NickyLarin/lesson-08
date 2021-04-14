import "./CardsCatalog.css";
import { SimpleCard } from "../SimpleCard/SimpleCard";
import block from "bem-cn";
import React from "react";

interface CardItem {
  title: string;
  img: string;
  href: string;
}

interface Props {
  items: Array<CardItem>;
}

const b = block("cards-catalog");

export const CardsCatalog: React.FC<Props> = ({ items }) => {
  return (
    <div className={b()}>
      {items.map((item: CardItem, index: number) => (
        <SimpleCard className={b("card")} key={index} title={item.title} img={item.img} href={item.href} />
      ))}
    </div>
  );
};
