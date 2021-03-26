import "./Header.css";
import { Container } from "../Container/Container";
import block from "bem-cn";
import React, { ReactNode } from "react";

interface Props {
  menu?: ReactNode;
}

const b = block("header");

export const Header: React.FC<Props> = ({ menu = null }) => (
  <header className={b()}>
    <Container parentBlock={b}>
      <a className={b("title")} href={"/"}>
        Catalog
      </a>
      {menu}
    </Container>
  </header>
);
