import "./ListCatalog.css";
import { ListEntry } from "../ListEntry/ListEntry";
import block from "bem-cn";
import React from "react";

interface Props {
  items: Array<any>;
  getTitle: (item: any) => string;
  getText: (item: any) => string | null;
}

const b = block("list-catalog");

export const ListCatalog: React.FC<Props> = ({ items, getTitle, getText }) => {
  return (
    <div className={b()}>
      {items.map((item: any, index: number) => (
        <ListEntry key={index} title={getTitle(item)} text={getText(item)} />
      ))}
    </div>
  );
};
