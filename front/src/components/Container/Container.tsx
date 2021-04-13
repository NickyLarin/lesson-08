import "./Container.css";
import block from "bem-cn";
import React from "react";
import { BaseComponentProps } from "../../types/base";

interface Props extends BaseComponentProps {}

const b = block("container");

export const Container: React.FC<Props> = ({ className, children }) => {
  return <div className={b({}).mix(className)}>{children}</div>;
};
