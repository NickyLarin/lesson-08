import "./SimpleCard.css";
import block from "bem-cn";
import React from "react";
import { Link } from "react-router-dom";
import { BaseComponentProps } from "../../types/base";

interface Props extends BaseComponentProps {
  title: string;
  img: string;
  href: string;
}

const b = block("simple-card");

export const SimpleCard: React.FC<Props> = ({ className, title, img, href }) => {
  return (
    <Link className={b({}).mix(className)} to={href}>
      <span className={[b("img"), "material-icons"].join(" ")}>{img}</span>
      <p className={b("title")}>{title}</p>
    </Link>
  );
};
