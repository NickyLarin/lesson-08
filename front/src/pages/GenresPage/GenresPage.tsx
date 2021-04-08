import "./GenresPage.css";
import { apiGenreGetAll } from "../../api/genre";
import { Container } from "../../components/Container/Container";
import { Genre } from "../../types/genre";
import { ListCatalog } from "../../components/ListCatalog/ListCatalog";
import block from "bem-cn";
import React, { useEffect, useState } from "react";

interface Props {}

const b = block("genres-page");

export const GenresPage: React.FC<Props> = () => {
  const [genreList, setGenreList] = useState<Genre.Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function setGenres() {
      setLoading(true);
      const genres = await apiGenreGetAll();
      setGenreList(genres);
      setLoading(false);
    }
    setGenres();
  }, []);

  const getTitle = (item: Genre.Data) => item.name;
  return (
    <div className={b()}>
      <Container parentBlock={b} flexDirection="column">
        <h1 className={b("title")}>Жанры</h1>
        <ListCatalog loading={loading} items={genreList} getTitle={getTitle} getText={() => null} />
      </Container>
    </div>
  );
};
