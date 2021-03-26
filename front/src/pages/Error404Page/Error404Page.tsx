import block from "bem-cn";
import React from "react";
import { Container } from "../../components/Container/Container";
import "./Error404Page.css";

interface Props {}

const b = block("error404-page");

export const Error404Page: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <Container justifyContent="center" flexDirection="column">
        <h1 className={b("message")}>Ошибка 404, страница не найдена</h1>
      </Container>
    </div>
  );
};
