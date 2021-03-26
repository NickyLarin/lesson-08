import "./MainLayout.css";
import { Header } from "../../components/Header/Header";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import block from "bem-cn";
import React from "react";

interface Props {
  path: string;
}

interface menuItem {
  href: string;
  text: string;
}

const b = block("main-layout");

const menuItems: Array<menuItem> = [
  {
    href: "/ref",
    text: "Каталог",
  },
  {
    href: "/ref/books",
    text: "Книги",
  },
  {
    href: "/ref/authors",
    text: "Авторы",
  },
  {
    href: "/ref/genres",
    text: "Жанры",
  },
  {
    href: "/ref/publishers",
    text: "Издатели",
  },
  {
    href: "/ref/languages",
    text: "Языки",
  },
];

export const MainLayout: React.FC<Props> = ({ path, children }) => {
  const activeIndex = menuItems.findIndex((item) => item.href === path);
  return (
    <div className={b()}>
      <Header menu={<MainMenu menuItems={menuItems} activeIndex={activeIndex} />} />
      <main className={b("main")}>{children}</main>
    </div>
  );
};
