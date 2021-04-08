import "./LanguagesPage.css";
import { apiLanguageGetAll } from "../../api/language";
import { Container } from "../../components/Container/Container";
import { Language } from "../../types/language";
import { ListCatalog } from "../../components/ListCatalog/ListCatalog";
import block from "bem-cn";
import React, { useEffect, useState } from "react";

interface Props {}

const b = block("languages-page");

export const LanguagesPage: React.FC<Props> = () => {
  const [languagesList, setLanguagesList] = useState<Language.Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function setLanguages() {
      setLoading(true);
      const languages = await apiLanguageGetAll();
      setLanguagesList(languages);
      setLoading(false);
    }
    setLanguages();
  }, []);

  const getTitle = (item: Language.Data) => item.name;
  return (
    <div className={b()}>
      <Container parentBlock={b} flexDirection="column">
        <h1 className={b("title")}>Языки</h1>
        <ListCatalog loading={loading} items={languagesList} getTitle={getTitle} getText={() => null} />
      </Container>
    </div>
  );
};
