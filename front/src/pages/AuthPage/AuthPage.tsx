import "./AuthPage.css";
import { LoginForm } from "../../components/Forms/LoginForm/LoginForm";
import block from "bem-cn";
import React from "react";

interface Props {}

const b = block("auth-page");

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1 className={b("title")}>Авторизация</h1>
      <LoginForm />
    </div>
  );
};
