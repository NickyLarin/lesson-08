import "./LoginForm.css";
import { FormButton } from "../FormButton/FormButton";
import { FormInput } from "../FormInput/FormInput";
import { InputType } from "../FormInput/InputType";
import { Link } from "react-router-dom";
import block from "bem-cn";
import React from "react";

interface Props {}

const b = block("login-form");

export const LoginForm: React.FC<Props> = () => {
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className={b()}>
      <span className={b("img").mix("material-icons")}>login</span>
      <form onSubmit={onSubmit}>
        <div className={b("inputs-container")}>
          <FormInput
            className={b("login-input")}
            name={"login"}
            htmlType={InputType.Text}
            placeholder={"Имя пользователя"}
          />
          <FormInput
            className={b("password-input")}
            name={"login"}
            htmlType={InputType.Password}
            placeholder={"Пароль"}
          />
          <FormButton className={b("login-button")} text={"Войти"} />
        </div>
      </form>
      <span>
        Нет аккаунта? Зарегистрируйся
        <Link className={b("sign-up-link")} to="/auth/sign-up">
          {" "}
          здесь
        </Link>
        .
      </span>
    </div>
  );
};
