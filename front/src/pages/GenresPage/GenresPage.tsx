import "./GenresPage.css";
import { Container } from "../../components/Container/Container";
import { ListCatalog } from "../../components/ListCatalog/ListCatalog";
import block from "bem-cn";
import React from "react";

interface Props {}

const b = block("genres-page");

interface Genre {
  title: string;
}

const genres: Array<Genre> = [
  { title: "Интернет" },
  { title: "Программирование" },
  { title: "Базы данных" },
  { title: "Роман" },
  { title: "Детектив" },
  { title: "Фантастика" },
  { title: "История" },
  { title: "Поэзия" },
];

export const GenresPage: React.FC<Props> = () => {
  const getTitle = (item: Genre) => item.title;
  const getText = (item: Genre) => null;
  return (
    <div className={b()}>
      <Container parentBlock={b} flexDirection="column">
        <h1 className={b("title")}>Жанры</h1>
        <ListCatalog items={genres} getTitle={getTitle} getText={getText} />
      </Container>
    </div>
  );
};
