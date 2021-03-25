import block from "bem-cn";
import React from "react";
import { Header } from "../../components/Header/Header";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import "./AuthLayout.scss";

interface Props {}

const b = block("auth-layout");

const menuItems = [
  {
    href: "/auth",
    text: "Login",
  },
];

export const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={b()}>
      <Header menu={<MainMenu menuItems={menuItems} activeIndex={-1} />} />
      <main className={b("main")}>{children}</main>
    </div>
  );
};
