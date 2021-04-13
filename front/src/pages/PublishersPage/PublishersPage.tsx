import "./PublishersPage.css";
import { debounce } from "lodash";
import { Input } from "../../components/Input/Input";
import { ListCatalog } from "../../components/ListCatalog/ListCatalog";
import { Publisher } from "../../types/publisher";
import { usePublishers } from "../../hooks/usePublishers";
import block from "bem-cn";
import React, { ChangeEventHandler, useCallback } from "react";

interface Props {}

const b = block("publishers-page");

export const PublishersPage: React.FC<Props> = () => {
  const { publishersList, loading, error, setSearch } = usePublishers();

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  const debouncedChangeHandler = useCallback(debounce(handleChange, 500), [handleChange]);

  const getTitle = (item: Publisher.Data) => item.name;

  if (error.hasError) {
    return (
      <div className={b()}>
        <h1 className={b("title")}>Издатели</h1>
        <h1 className={b("error")}>Произошла ошибка</h1>
      </div>
    );
  }

  return (
    <div className={b()}>
      <h1 className={b("title")}>Издатели</h1>
      <Input name={"search"} placeholder={"Поиск"} onChange={debouncedChangeHandler} />
      {publishersList.length < 1 ? (
        <h1 className={b("error")}>Нет результатов</h1>
      ) : (
        <ListCatalog loading={loading} items={publishersList} getTitle={getTitle} />
      )}
    </div>
  );
};
