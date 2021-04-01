import "./FormInput.css";
import { BaseComponentProps } from "../../../types/base";
import { InputType } from "./InputType";
import block from "bem-cn";
import React, { ChangeEventHandler } from "react";
import { emptyFunction } from "../../../utils";

interface Props extends BaseComponentProps {
  name: string;
  htmlType?: InputType;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const b = block("form-input");

export const FormInput: React.FC<Props> = ({
  className,
  name,
  htmlType = InputType.Text,
  placeholder = "",
  value = "",
  onChange = emptyFunction,
}) => {
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e);
  };
  return (
    <div className={b({}).mix(className)}>
      <input
        className={b("input")}
        name={name}
        type={htmlType}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      ></input>
      <span className={b("border-span")}></span>
    </div>
  );
};
