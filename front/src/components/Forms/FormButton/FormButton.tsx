import "./FormButton.css";
import { BaseComponentProps } from "../../../types/base";
import { emptyFunction } from "../../../utils";
import block from "bem-cn";
import React, { MouseEventHandler } from "react";

interface Props extends BaseComponentProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const b = block("form-button");

export const FormButton: React.FC<Props> = ({ className, text, onClick = emptyFunction }) => (
  <button className={b({}).mix(className)} onClick={onClick}>
    {text}
  </button>
);
