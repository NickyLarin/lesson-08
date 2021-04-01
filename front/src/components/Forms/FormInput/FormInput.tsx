import "./FormInput.css";
import { BaseComponentProps } from "../../../types/base";
import { InputType } from "./InputType";
import block from "bem-cn";
import React from "react";

interface Props extends BaseComponentProps {
  name: string;
  htmlType?: InputType;
  placeholder?: string;
}

const b = block("form-input");

export const FormInput: React.FC<Props> = ({ className, name, htmlType = InputType.Text, placeholder = "" }) => (
  <div className={b({}).mix(className)}>
    <input className={b("input")} name={name} type={htmlType} placeholder={placeholder}></input>
    <span className={b("border-span")}></span>
  </div>
);
