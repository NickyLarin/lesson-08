import "./BooksPage.scss";
import { Container } from "../../components/Container/Container";
import { ListCatalog } from "../../components/Catalogs/ListCatalog/ListCatalog";
import block from "bem-cn";
import React from "react";

interface Props {}

const b = block("books-page");

interface Book {
  title: string;
  publisher: string;
  year: number;
}

const books = [
  { title: "Преступление и наказание", publisher: "Питер", year: "2010" },
  { title: "Война и мир", publisher: "O'Reilly", year: "2011" },
  { title: "Преступление и Наказание", publisher: "Питер", year: "2010" },
  { title: "Война и мир", publisher: "O'Reilly", year: "2011" },
  { title: "Преступление и Наказание", publisher: "Питер", year: "2010" },
  { title: "Война и мир", publisher: "O'Reilly", year: "2011" },
];

export const BooksPage: React.FC<Props> = () => {
  const getTitle = (item: Book) => item.title;
  const getText = (item: Book) => `${item.publisher} - ${item.year}`;
  return (
    <div className={b()}>
      <Container parentBlock={b} flexDirection="column">
        <h1 className={b("title")}>Книги</h1>
        <ListCatalog items={books} getTitle={getTitle} getText={getText} />
      </Container>
    </div>
  );
};
