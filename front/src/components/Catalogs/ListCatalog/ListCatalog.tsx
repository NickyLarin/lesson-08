import "./ListCatalog.css";
import { ListEntry } from "./ListEntry/ListEntry";
import block from "bem-cn";
import React from "react";

interface Props {
  items: Array<any>;
  getTitle: Function;
  getText: Function;
}

const b = block("list-catalog");

export const ListCatalog: React.FC<Props> = ({ items, getTitle, getText }) => {
  const authors = [];
  for (let item of items) {
    authors.push(<ListEntry title={getTitle(item)} text={getText(item)} />);
  }
  return <div className={b()}>{authors}</div>;
};
