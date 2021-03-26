import "./LitsEntry.css";
import block from "bem-cn";
import React from "react";

interface Props {
  title: string;
  text: string;
}

const b = block("list-entry");

export const ListEntry: React.FC<Props> = ({ title, text }) => (
  <div className={b()}>
    <p className={b("title")}>{title}</p>
    {text && <span className={b("text")}>{text}</span>}
  </div>
);
