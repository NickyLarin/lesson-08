import "./AuthorsPage.css";
import { Author } from "../../types/author";
import { debounce } from "lodash";
import { Input } from "../../components/Input/Input";
import { ListCatalog } from "../../components/ListCatalog/ListCatalog";
import { useAuthors } from "../../hooks/useAuthors";
import block from "bem-cn";
import React, { ChangeEventHandler, useCallback } from "react";

interface Props {}

const b = block("authors-page");

export const AuthorsPage: React.FC<Props> = () => {
  const { authorsList, loading, error, setSearch } = useAuthors();

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  const debouncedChangeHandler = useCallback(debounce(handleChange, 500), [handleChange]);

  const getTitle = (item: Author.Data) => item.name;

  if (error.hasError) {
    return (
      <div className={b()}>
        <h1 className={b("title")}>Авторы</h1>
        <h1 className={b("error")}>Произошла ошибка</h1>
      </div>
    );
  }

  return (
    <div className={b()}>
      <h1 className={b("title")}>Авторы</h1>
      <Input name={"search"} placeholder={"Поиск"} onChange={debouncedChangeHandler} />
      {authorsList.length < 1 ? (
        <h1 className={b("error")}>Нет результатов</h1>
      ) : (
        <ListCatalog loading={loading} items={authorsList} getTitle={getTitle} />
      )}
    </div>
  );
};
