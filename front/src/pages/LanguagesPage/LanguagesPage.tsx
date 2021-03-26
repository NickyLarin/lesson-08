import "./LanguagesPage.css";
import { Container } from "../../components/Container/Container";
import { ListCatalog } from "../../components/ListCatalog/ListCatalog";
import block from "bem-cn";
import React from "react";

interface Props {}

const b = block("languages-page");

interface Language {
  title: string;
}

const languages = [{ title: "Русский" }, { title: "Английский" }];

export const LanguagesPage: React.FC<Props> = () => {
  const getTitle = (item: Language) => item.title;
  const getText = (item: Language) => null;
  return (
    <div className={b()}>
      <Container parentBlock={b} flexDirection="column">
        <h1 className={b("title")}>Языки</h1>
        <ListCatalog items={languages} getTitle={getTitle} getText={getText} />
      </Container>
    </div>
  );
};
