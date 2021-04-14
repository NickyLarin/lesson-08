import "./PublishersPage.css";
import { BorderButton } from "../../components/Button/BorderButton";
import { debounce } from "lodash";
import { Input } from "../../components/Input/Input";
import { List } from "../../components/List/List";
import { Publisher } from "../../types/publisher";
import { usePublishers } from "../../hooks/usePublishers";
import block from "bem-cn";
import React, { ChangeEventHandler, MouseEventHandler, useCallback, useEffect, useState } from "react";

interface Props {}

const b = block("publishers-page");

class PublisherList extends List<Publisher.Data> {}

export const PublishersPage: React.FC<Props> = () => {
  const { publishersList, loading, error, setSearch, updatePublisher, deletePublisher } = usePublishers();

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  const handleSaveItem = (id: number, value: any) => {
    const publisher: Publisher.Data = { id, name: value };
    updatePublisher(publisher);
  };

  const handleDeleteItem = (id: number) => {
    deletePublisher(id);
  };

  const handleCreateClick: MouseEventHandler<HTMLButtonElement> = (e) => {};

  const debouncedChangeHandler = useCallback(debounce(handleChange, 500), [handleChange]);

  if (error.hasError) {
    return (
      <div className={b()}>
        <h1 className={b("title")}>Издатели</h1>
        <h1 className={b("error")}>Произошла ошибка</h1>
      </div>
    );
  }

  const getPublisherName = (item: Publisher.Data) => {
    return item.name;
  };
  return (
    <div className={b()}>
      <h1 className={b("title")}>Издатели</h1>
      <div className={b("controls-container")}>
        <Input className={b("search-input")} name={"search"} placeholder={"Поиск"} onChange={debouncedChangeHandler} />
        <BorderButton className={b("create-button")} text={"Создать"} onClick={handleCreateClick} />
      </div>
      {publishersList.length < 1 ? (
        <h1 className={b("error")}>Нет результатов</h1>
      ) : (
        <PublisherList
          loading={loading}
          items={publishersList}
          getItemValue={getPublisherName}
          saveItem={handleSaveItem}
          deleteItem={handleDeleteItem}
        />
      )}
    </div>
  );
};
