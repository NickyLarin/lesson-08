import "./SignUpForm.css";
import { Link } from "react-router-dom";
import block from "bem-cn";
import React from "react";
import { FormButton } from "../FormButton/FormButton";
import { FormInput } from "../FormInput/FormInput";
import { InputType } from "../FormInput/InputType";

interface Props {}

const b = block("sign-up-form");

export const SignUpForm: React.FC<Props> = () => {
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className={b()}>
      <span className={b("img").mix("material-icons")}>app_registration</span>
      <form onSubmit={onSubmit}>
        <div className={b("inputs-container")}>
          <FormInput
            className={b("login-input")}
            name={"login"}
            htmlType={InputType.Text}
            placeholder={"Имя пользователя"}
          />
          <FormInput className={b("email-input")} name={"email"} htmlType={InputType.Email} placeholder={"E-Mail"} />
          <FormInput
            className={b("password-input")}
            name={"password"}
            htmlType={InputType.Password}
            placeholder={"Пароль"}
          />
          <FormInput
            className={b("password-confirm-input")}
            name={"password-confirm"}
            htmlType={InputType.Password}
            placeholder={"Повторите пароль"}
          />
          <FormButton className={b("sign-up-button")} text={"Зарегистрироваться"} />
        </div>
      </form>
      <span>
        Уже есть аккаунт? Войди
        <Link className={b("login-link")} to="/auth/login">
          {" "}
          здесь
        </Link>
        .
      </span>
    </div>
  );
};
