import "./Input.css";
import { BaseComponentProps } from "../../types/base";
import { emptyFunction } from "../../utils";
import { InputType } from "./InputType";
import block from "bem-cn";
import React, { ChangeEventHandler, useEffect, useState } from "react";

interface Props extends BaseComponentProps {
  name: string;
  htmlType?: InputType;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const b = block("input");

export const Input: React.FC<Props> = ({
  className,
  name,
  htmlType = InputType.Text,
  placeholder = "",
  value = "",
  defaultValue = "",
  onChange = emptyFunction,
}) => {
  const [currentValue, setCurrentValue] = useState<string>(defaultValue);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCurrentValue(e.target.value);
    onChange(e);
  };

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div className={b({}).mix(className)}>
      <input
        className={b("input")}
        name={name}
        type={htmlType}
        placeholder={placeholder}
        value={currentValue}
        onChange={handleOnChange}
      ></input>
      <span className={b("input-border")}></span>
    </div>
  );
};
