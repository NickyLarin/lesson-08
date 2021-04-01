import block from "bem-cn";
import React from "react";
import { Header } from "../../components/Header/Header";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import "./AuthLayout.css";

interface Props {
  path: string;
}

const b = block("auth-layout");

const menuItems = [
  {
    href: "/auth/login",
    text: "Войти",
  },
  {
    href: "/auth/sign-up",
    text: "Зарегистрироваться",
  },
];

export const AuthLayout: React.FC<Props> = ({ path, children }) => {
  const activeIndex = menuItems.findIndex((item) => item.href === path);
  return (
    <div className={b()}>
      <Header menu={<MainMenu menuItems={menuItems} activeIndex={activeIndex} />} />
      <main className={b("main")}>{children}</main>
    </div>
  );
};
