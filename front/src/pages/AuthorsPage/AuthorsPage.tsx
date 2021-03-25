import "./AuthorsPage.scss";
import { Container } from "../../components/Container/Container";
import { ListCatalog } from "../../components/Catalogs/ListCatalog/ListCatalog";
import block from "bem-cn";
import React from "react";

interface Props {}

const b = block("authors-page");

interface Author {
  name: string;
  books: Array<string>;
}

const authors: Array<Author> = [
  { name: "Борис Черный", books: ["Книга 1", "Книга 2", "Книга 3", "Книга 4"] },
  { name: "Александр Пушкин", books: ["Книга 3", "Книга 4"] },
  { name: "Борис Черный", books: ["Книга 1", "Книга 2"] },
  { name: "Александр Пушкин", books: ["Книга 3", "Книга 4"] },
  { name: "Борис Черный", books: ["Книга 1", "Книга 2"] },
  { name: "Александр Пушкин", books: ["Книга 3", "Книга 4"] },
  { name: "Борис Черный", books: ["Книга 1", "Книга 2"] },
  { name: "Александр Пушкин", books: ["Книга 3", "Книга 4"] },
  { name: "Борис Черный", books: ["Книга 1", "Книга 2"] },
  { name: "Александр Пушкин", books: ["Книга 3", "Книга 4"] },
  { name: "Борис Черный", books: ["Книга 1", "Книга 2"] },
  { name: "Александр Пушкин", books: ["Книга 3", "Книга 4"] },
  { name: "Борис Черный", books: ["Книга 1", "Книга 2"] },
  { name: "Александр Пушкин", books: ["Книга 3", "Книга 4"] },
];

export const AuthorsPage: React.FC<Props> = () => {
  const getTitle = (item: Author) => item.name;
  const getText = (item: Author) => item.books.slice(0, 3).join(", ");
  return (
    <div className={b()}>
      <Container parentBlock={b} flexDirection="column">
        <h1 className={b("title")}>Авторы</h1>
        <ListCatalog items={authors} getTitle={getTitle} getText={getText} />
      </Container>
    </div>
  );
};
