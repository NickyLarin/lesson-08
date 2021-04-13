import "./BooksPage.css";
import { apiBookGetAll } from "../../api/book";
import { Book } from "../../types/book";
import { Errors } from "../../errors/types";
import { ListCatalog } from "../../components/ListCatalog/ListCatalog";
import block from "bem-cn";
import React, { useEffect, useState } from "react";

interface Props {}

const b = block("books-page");

export const BooksPage: React.FC<Props> = () => {
  const [booksList, setBooksList] = useState<Book.Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Errors.APIRequestError>({ hasError: false, errorInfo: null });

  useEffect(() => {
    async function setBooks() {
      setLoading(true);
      try {
        const books = await apiBookGetAll();
        setBooksList(books);
      } catch (err) {
        setError({ hasError: true, errorInfo: err });
      } finally {
        setLoading(false);
      }
    }
    setBooks();
  }, []);

  const getTitle = (item: Book.Data) => item.title;
  const getText = (item: Book.Data) => {
    if (item.description) return `${item.description} | ISBN: ${item.isbn} | Год: ${item.year}`;
    return `${item.isbn} - ${item.year}`;
  };
  return (
    <div className={b()}>
      <h1 className={b("title")}>Книги</h1>
      {error.hasError ? (
        <h1 className={b("error")}>Произошла ошибка</h1>
      ) : (
        <ListCatalog loading={loading} items={booksList} getTitle={getTitle} getText={getText} />
      )}
    </div>
  );
};
