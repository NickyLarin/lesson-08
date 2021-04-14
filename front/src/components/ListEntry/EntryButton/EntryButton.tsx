import React, { MouseEventHandler } from "react";
import block from "bem-cn";
import "./EntryButton.css";
import { BaseComponentProps } from "../../../types/base";
import { emptyFunction } from "../../../utils";

interface Props extends BaseComponentProps {
  icon: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const b = block("entry-button");

export const EntryButton: React.FC<Props> = ({ className, icon, onClick = emptyFunction }) => (
  <button className={b({}).mix(className)} onClick={onClick}>
    <span className={b("text").mix("material-icons")}>{icon}</span>
  </button>
);
