import "./ElementEditor.css";
import { BaseComponentProps } from "../../types/base";
import { browserHistory } from "../../browserHistory";
import { FormButton } from "../Forms/FormButton/FormButton";
import { Input } from "../Input/Input";
import block from "bem-cn";
import React, { KeyboardEventHandler, MouseEventHandler, useCallback, useEffect, useState } from "react";

export interface Field {
  name: string;
  value: string;
  placeholder?: string;
}

interface Props extends BaseComponentProps {
  title: string;
  field: Field;
  icon: string | null;
  createItem: (value: string) => void;
}

const b = block("fields-content");

export const ElementEditor: React.FC<Props> = ({ title, field, icon = null, createItem }) => {
  const [currentValue, setCurrentValue] = useState<string>(field.value);

  const save = useCallback(() => {
    createItem(currentValue);
  }, [currentValue, createItem]);
  const abort = () => browserHistory.goBack();

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (["Enter", "NumpadEnter"].includes(e.code)) {
        save();
      } else if (e.code === "Escape") {
        abort();
      }
    },
    [save]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [save, onKeyDown]);

  const handleSave: MouseEventHandler<HTMLButtonElement> = () => save();
  const handleAbort: MouseEventHandler<HTMLButtonElement> = () => abort();

  return (
    <div className={b()}>
      <h1 className={b("title")}>{title}</h1>
      <div className={b("container")}>
        {!!icon && <span className={b("icon").mix("material-icons")}>{icon}</span>}
        <Input
          className={b("input")}
          name={"current-value"}
          value={currentValue}
          placeholder={field?.placeholder || field.value}
          onChange={(e) => {
            setCurrentValue(e.target.value);
          }}
        />
        <div className={b("buttons-container")}>
          <FormButton text={"Сохранить"} onClick={handleSave} />
          <FormButton text={"Отменить"} onClick={handleAbort} />
        </div>
      </div>
    </div>
  );
};
