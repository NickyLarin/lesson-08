import "./AuthorsPage.css";
import { apiAuthorGetAll } from "../../api/author";
import { Author } from "../../types/author";
import { Container } from "../../components/Container/Container";
import { ListCatalog } from "../../components/ListCatalog/ListCatalog";
import block from "bem-cn";
import React, { useEffect, useState } from "react";

interface Props {}

const b = block("authors-page");

export const AuthorsPage: React.FC<Props> = () => {
  const [authorsList, setAuthorsList] = useState<Author.Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function setAuthors() {
      setLoading(true);
      const authors = await apiAuthorGetAll();
      setAuthorsList(authors);
      setLoading(false);
    }
    setAuthors();
  }, []);

  const getTitle = (item: Author.Data) => item.name;
  return (
    <div className={b()}>
      <Container parentBlock={b} flexDirection="column">
        <h1 className={b("title")}>Авторы</h1>
        <ListCatalog loading={loading} items={authorsList} getTitle={getTitle} getText={() => null} />
      </Container>
    </div>
  );
};
