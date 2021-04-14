import "./EntryInput.css";
import { BaseComponentProps } from "../../../types/base";
import { emptyFunction } from "../../../utils";
import { InputType } from "../../Input/InputType";
import block from "bem-cn";
import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";

interface Props extends BaseComponentProps {
  name: string;
  htmlType?: InputType;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onInput?: ChangeEventHandler<HTMLInputElement>;
}

const b = block("entry-input");

export const EntryInput: React.FC<Props> = ({
  className,
  name,
  htmlType = InputType.Text,
  placeholder = "",
  value = "",
  defaultValue = "",
  onChange = emptyFunction,
  onInput = emptyFunction,
}) => {
  const [currentValue, setCurrentValue] = useState<string>(defaultValue);
  const inputElem = useRef<HTMLInputElement>(null);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCurrentValue(e.target.value);
    onChange(e);
    onInput(e);
  };

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  useEffect(() => {
    inputElem?.current?.select();
  }, []);

  return (
    <div className={b({}).mix(className)}>
      <input
        ref={inputElem}
        className={b("input")}
        name={name}
        type={htmlType}
        placeholder={placeholder}
        value={currentValue}
        onChange={handleOnChange}
        onInput={handleOnChange}
      ></input>
      <span className={b("border-span")}></span>
    </div>
  );
};
