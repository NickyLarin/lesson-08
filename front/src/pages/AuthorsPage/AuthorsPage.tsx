import "./AuthorsPage.css";
import { Author } from "../../types/author";
import { debounce } from "lodash";
import { Input } from "../../components/Input/Input";
import { List } from "../../components/List/List";
import block from "bem-cn";
import React, { ChangeEventHandler, MouseEventHandler, useCallback } from "react";
import { useAuthors } from "../../hooks/useAuthors";
import { BorderButton } from "../../components/BorderButton/BorderButton";
import { browserHistory } from "../../browserHistory";

interface Props {}

const b = block("authors-page");

class AuthorsList extends List<Author.Data> {}

export const AuthorsPage: React.FC<Props> = () => {
  const { authorsList, loading, error, setSearch, updateAuthor, deleteAuthor } = useAuthors(false);

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  const debouncedChangeHandler = useCallback(debounce(handleChange, 500), [handleChange]);

  const handleSaveItem = (id: number, value: string) => {
    const publisher: Author.Data = { id, name: value };
    updateAuthor(publisher);
  };

  const handleDeleteItem = (id: number) => {
    deleteAuthor(id);
  };

  const handleCreateClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    browserHistory.push("/ref/authors/create");
  };

  const getAuthorName = (item: Author.Data) => item.name;
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
      <div className={b("controls-container")}>
        <Input className={b("search-input")} name={"search"} placeholder={"Поиск"} onChange={debouncedChangeHandler} />
        <BorderButton className={b("create-button")} text={"Создать"} onClick={handleCreateClick} />
      </div>
      {authorsList.length < 1 ? (
        <h1 className={b("error")}>Нет результатов</h1>
      ) : (
        <AuthorsList
          loading={loading}
          items={authorsList}
          getItemValue={getAuthorName}
          saveItem={handleSaveItem}
          deleteItem={handleDeleteItem}
        />
      )}
    </div>
  );
};
