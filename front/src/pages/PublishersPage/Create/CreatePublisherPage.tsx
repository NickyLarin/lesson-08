import React from "react";
import { ElementEditor } from "../../../components/ElementEditor/ElementEditor";
import { usePublishers } from "../../../hooks/usePublishers";

interface Props {}

export const CreatePublisherPage: React.FC<Props> = () => {
  const { createPublisher } = usePublishers(true);
  return (
    <ElementEditor
      title={"Добавить издателя"}
      field={{ name: "Название издателя", value: "", placeholder: "Введите название издателя" }}
      icon={"location_city"}
      createItem={(value) => {
        createPublisher({ name: value });
      }}
    />
  );
};
