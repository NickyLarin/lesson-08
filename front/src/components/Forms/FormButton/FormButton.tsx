import "./FormButton.css";
import { BaseComponentProps } from "../../../types/base";
import block from "bem-cn";
import React from "react";

interface Props extends BaseComponentProps {
  text: string;
}

const b = block("form-button");

export const FormButton: React.FC<Props> = ({ className, text }) => (
  <button className={b({}).mix(className)}>{text}</button>
);
