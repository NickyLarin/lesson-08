import React from "react";
import { ElementEditor } from "../../../components/ElementEditor/ElementEditor";
import { useAuthors } from "../../../hooks/useAuthors";

interface Props {}

export const CreateAuthorPage: React.FC<Props> = () => {
  const { createAuthor } = useAuthors(true);
  return (
    <ElementEditor
      title={"Добавить автора"}
      field={{ name: "Имя автора", value: "", placeholder: "Введите имя автора" }}
      icon={"people"}
      createItem={(value) => {
        createAuthor({ name: value });
      }}
    />
  );
};
