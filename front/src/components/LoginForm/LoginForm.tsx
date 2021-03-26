import React from "react";
import block from "bem-cn";
import "./LoginForm.css";

interface Props {}

const b = block("login-form");

export const LoginForm: React.FC<Props> = () => {
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className={b()}>
      <span className={["material-icons", b("img")].join(" ")}>login</span>
      <form onSubmit={onSubmit}>
        <div className={b("inputs-container")}>
          <input className={b("login-input")} name="login" type="text" placeholder="Login"></input>
          <input className={b("pass-input")} name="password" type="password" placeholder="Password"></input>
          <button className={b("login-button")}>Login</button>
        </div>
      </form>
    </div>
  );
};
