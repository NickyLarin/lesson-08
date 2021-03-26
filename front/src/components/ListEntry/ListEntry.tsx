import "./ListEntry.css";
import block from "bem-cn";
import React from "react";

interface Props {
  title: string;
  text?: string | null;
}

const b = block("list-entry");

export const ListEntry: React.FC<Props> = ({ title, text = null }) => (
  <div className={b()}>
    <p className={b("title")}>{title}</p>
    {text && <span className={b("text")}>{text}</span>}
  </div>
);
