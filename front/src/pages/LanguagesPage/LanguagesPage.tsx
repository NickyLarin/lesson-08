import "./LanguagesPage.css";
import { apiLanguageGetAll } from "../../api/language";
import { Errors } from "../../errors/types";
import { Language } from "../../types/language";
import { List } from "../../components/List/List";
import block from "bem-cn";
import React, { useEffect, useState } from "react";

interface Props {}

const b = block("languages-page");

class LanguagesList extends List<Language.Data> {}

export const LanguagesPage: React.FC<Props> = () => {
  const [languagesList, setLanguagesList] = useState<Language.Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Errors.APIRequestError>({ hasError: false, errorInfo: null });

  useEffect(() => {
    async function setLanguages() {
      setLoading(true);
      try {
        const languages = await apiLanguageGetAll();
        setLanguagesList(languages);
      } catch (err) {
        setError({ hasError: true, errorInfo: err });
      }
      setLoading(false);
    }
    setLanguages();
  }, []);

  const getTitle = (item: Language.Data) => item.name;
  return (
    <div className={b()}>
      <h1 className={b("title")}>Языки</h1>
      {error.hasError ? (
        <h1 className={b("error")}>Произошла ошибка</h1>
      ) : (
        <LanguagesList loading={loading} items={languagesList} getItemValue={getTitle} />
      )}
    </div>
  );
};
