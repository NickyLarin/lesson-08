import "./Error404Page.css";
import block from "bem-cn";
import React from "react";

interface Props {}

const b = block("error404-page");

export const Error404Page: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1 className={b("message")}>Ошибка 404, страница не найдена</h1>
    </div>
  );
};
