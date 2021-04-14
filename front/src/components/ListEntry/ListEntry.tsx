import "./ListEntry.css";
import { BaseComponentProps } from "../../types/base";
import { emptyFunction } from "../../utils";
import { EntryButton } from "./EntryButton/EntryButton";
import { EntryInput } from "./EntryInput/EntryInput";
import { Utils } from "../../types/utils";
import block from "bem-cn";
import React, { MouseEventHandler, useEffect, useState } from "react";

interface Props extends BaseComponentProps {
  active: boolean;
  itemValue: string;
  itemInfo?: string | null;
  setActive?: ((isActive: boolean) => void) | Utils.EmptyFunction;
  saveItem?: ((value: string) => void) | Utils.EmptyFunction;
  removeItem?: (() => void) | Utils.EmptyFunction;
}

const b = block("list-entry");

export const ListEntry: React.FC<Props> = ({
  className,
  active,
  itemValue,
  itemInfo = null,
  setActive = emptyFunction,
  saveItem = emptyFunction,
  removeItem = emptyFunction,
}) => {
  const [currentItemValue, setCurrentItemValue] = useState<string>(itemValue);

  const handleEditClick: MouseEventHandler<HTMLButtonElement> = () => {
    setActive(true);
  };

  const handleDeleteClick: MouseEventHandler<HTMLButtonElement> = () => {
    removeItem();
  };

  const handleDoneClick: MouseEventHandler<HTMLButtonElement> = () => {
    saveItem(currentItemValue);
  };

  const handleAbortClick: MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentItemValue(itemValue);
    setActive(false);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (["Enter", "NumpadEnter"].includes(e.code)) {
        saveItem(currentItemValue);
      } else if (e.code === "Escape") {
        setActive(false);
      }
    };
    if (active) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active, currentItemValue, saveItem, setActive]);

  if (active) {
    return (
      <div className={b({ active: true }).mix(className)}>
        <EntryInput
          name={"itemValue"}
          value={currentItemValue}
          placeholder={currentItemValue}
          onInput={(e) => setCurrentItemValue(e.target.value)}
        />
        <div className={b("buttons-container")}>
          <EntryButton className={b("left-button")} icon={"done"} onClick={handleDoneClick} />
          <EntryButton className={b("right-button")} icon={"close"} onClick={handleAbortClick} />
        </div>
      </div>
    );
  }

  return (
    <div className={b({}).mix(className)}>
      <p className={b("item-value")}>{itemValue}</p>
      {itemInfo && <span className={b("item-info")}>{itemInfo}</span>}
      <div className={b("buttons-container")}>
        <EntryButton className={b("left-button")} icon={"edit"} onClick={handleEditClick} />
        <EntryButton className={b("right-button")} icon={"delete"} onClick={handleDeleteClick} />
      </div>
    </div>
  );
};
