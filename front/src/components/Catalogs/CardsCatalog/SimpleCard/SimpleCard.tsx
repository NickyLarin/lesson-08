import "./SimpleCard.scss";
import block from "bem-cn";
import React from "react";

interface Props {
  title: string;
  img: string;
  href: string;
}

const b = block("simple-card");

export const SimpleCard: React.FC<Props> = ({ title, img, href }) => {
  const onClick = () => (window.location.href = href);
  return (
    <div className={b()} onClick={onClick}>
      <span className={[b("img"), "material-icons"].join(" ")}>{img}</span>
      <p className={b("title")}>{title}</p>
    </div>
  );
};
