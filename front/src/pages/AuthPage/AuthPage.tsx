import "./AuthPage.css";
import { Container } from "../../components/Container/Container";
import { LoginForm } from "../../components/Forms/LoginForm/LoginForm";
import block from "bem-cn";
import React from "react";

interface Props {}

const b = block("auth-page");

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <Container flexDirection={"column"}>
        <h1 className={b("title")}>Авторизация</h1>
        <LoginForm />
      </Container>
    </div>
  );
};
