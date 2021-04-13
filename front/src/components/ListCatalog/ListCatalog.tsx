import "./ListCatalog.css";
import { ListEntry } from "../ListEntry/ListEntry";
import { Spinner } from "../Spinner/Spinner";
import block from "bem-cn";
import React from "react";

interface Props {
  items: Array<any>;
  getTitle: (item: any) => string;
  getText?: (item: any) => string | null;
  loading?: boolean;
}

const b = block("list-catalog");

export const ListCatalog: React.FC<Props> = ({ items, getTitle, getText = null, loading = false }) => {
  if (loading) return <Spinner className={b("loading-spinner")} size={"20em"} lineWidth={50} />;
  return (
    <div className={b()}>
      {items.map((item: any, index: number) => (
        <ListEntry key={index} title={getTitle(item)} text={!!getText ? getText(item) : null} />
      ))}
    </div>
  );
};
