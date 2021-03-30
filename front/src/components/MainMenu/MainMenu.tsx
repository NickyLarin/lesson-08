import "./MainMenu.css";
import block from "bem-cn";
import React from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  href: string;
  text: string;
}

interface Props {
  menuItems: Array<MenuItem>;
  activeIndex: number;
}

const b = block("main-menu");

export const MainMenu: React.FC<Props> = ({ menuItems, activeIndex }) => {
  return (
    <nav className={b()}>
      {menuItems.map(({ href, text }, index) => {
        const classes = [b("link")];
        if (index === activeIndex) classes.push(b("link", { active: true }));
        return (
          <Link className={classes.join(" ")} key={index} to={href}>
            {text}
          </Link>
        );
      })}
    </nav>
  );
};
