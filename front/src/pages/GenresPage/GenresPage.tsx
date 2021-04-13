import "./GenresPage.css";
import { apiGenreGetAll } from "../../api/genre";
import { Errors } from "../../errors/types";
import { Genre } from "../../types/genre";
import { ListCatalog } from "../../components/ListCatalog/ListCatalog";
import block from "bem-cn";
import React, { useEffect, useState } from "react";

interface Props {}

const b = block("genres-page");

export const GenresPage: React.FC<Props> = () => {
  const [genreList, setGenreList] = useState<Genre.Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Errors.APIRequestError>({ hasError: false, errorInfo: null });

  useEffect(() => {
    async function setGenres() {
      setLoading(true);
      try {
        const genres = await apiGenreGetAll();
        setGenreList(genres);
      } catch (err) {
        setError({ hasError: true, errorInfo: err });
      }
      setLoading(false);
    }
    setGenres();
  }, []);

  const getTitle = (item: Genre.Data) => item.name;
  return (
    <div className={b()}>
      <h1 className={b("title")}>Жанры</h1>
      {error.hasError ? (
        <h1 className={b("error")}>Произошла ошибка</h1>
      ) : (
        <ListCatalog loading={loading} items={genreList} getTitle={getTitle} />
      )}
    </div>
  );
};
