import "./SimpleCard.css";
import block from "bem-cn";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  img: string;
  href: string;
}

const b = block("simple-card");

export const SimpleCard: React.FC<Props> = ({ title, img, href }) => {
  // const onClick = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   window.location.href = href;
  // };
  return (
    <Link className={b()} to={href}>
      <span className={[b("img"), "material-icons"].join(" ")}>{img}</span>
      <p className={b("title")}>{title}</p>
    </Link>
  );
};
