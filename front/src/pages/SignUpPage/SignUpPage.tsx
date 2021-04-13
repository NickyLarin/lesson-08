import "./SignUpPage.css";
import { SignUpForm } from "../../components/Forms/SignUpForm/SignUpForm";
import block from "bem-cn";
import React from "react";

interface Props {}

const b = block("sign-up-page");

export const SignUpPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1 className={b("title")}>Регистрация</h1>
      <SignUpForm />
    </div>
  );
};
