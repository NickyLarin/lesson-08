import "./PublishersPage.css";
import { Container } from "../../components/Container/Container";
import { ListCatalog } from "../../components/Catalogs/ListCatalog/ListCatalog";
import block from "bem-cn";
import React from "react";

interface Props {}

const b = block("publishers-page");

interface Publisher {
  title: string;
}

const publishers: Array<Publisher> = [{ title: "O'Reilly" }, { title: "Питер" }];

export const PublishersPage: React.FC<Props> = () => {
  const getTitle = (item: Publisher) => item.title;
  const getText = (item: Publisher) => null;
  return (
    <div className={b()}>
      <Container parentBlock={b} flexDirection="column">
        <h1 className={b("title")}>Издатели</h1>
        <ListCatalog items={publishers} getTitle={getTitle} getText={getText} />
      </Container>
    </div>
  );
};
