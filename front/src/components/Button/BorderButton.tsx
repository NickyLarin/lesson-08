import "./BorderButton.css";
import { BaseComponentProps } from "../../types/base";
import { emptyFunction } from "../../utils";
import block from "bem-cn";
import React, { MouseEventHandler } from "react";

interface Props extends BaseComponentProps {
  text: string;
  icon?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const b = block("border-button");

export const BorderButton: React.FC<Props> = ({ className, text, icon = "", onClick = emptyFunction }) => (
  <button className={b({}).mix(className)} onClick={onClick}>
    {!!icon && <span className={b("icon").mix("material-icons")}>{icon}</span>}
    <span className={b("text")}>{text}</span>
    <span className={b("border-span")}></span>
  </button>
);
