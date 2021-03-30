import "./Header.css";
import { Container } from "../Container/Container";
import block from "bem-cn";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  menu?: ReactNode;
}

const b = block("header");

export const Header: React.FC<Props> = ({ menu = null }) => (
  <header className={b()}>
    <Container parentBlock={b}>
      <Link className={b("title")} to="/">
        Catalog
      </Link>
      {menu}
    </Container>
  </header>
);
