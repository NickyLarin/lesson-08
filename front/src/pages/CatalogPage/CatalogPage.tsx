import "./CatalogPage.css";
import { CardsCatalog } from "../../components/CardsCatalog/CardsCatalog";
import block from "bem-cn";
import React from "react";

interface Props {}

const b = block("catalog-page");

const catalogItems = [
  { title: "Книги", img: "menu_book", href: "/ref/books" },
  { title: "Авторы", img: "people", href: "/ref/authors" },
  { title: "Жанры", img: "article", href: "/ref/genres" },
  { title: "Издатели", img: "location_city", href: "/ref/publishers" },
  { title: "Языки", img: "language", href: "/ref/languages" },
];

export const CatalogPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1 className={b("title")}>Каталог</h1>
      <CardsCatalog items={catalogItems} />
    </div>
  );
};
