import "./Container.css";
import { Property } from "csstype";
import * as CSS from "csstype";
import block, { Block } from "bem-cn";
import React from "react";

interface Props {
  parentBlock?: Block;
  justifyContent?: Property.JustifyContent;
  flexDirection?: Property.FlexDirection;
}

const b = block("container");

export const Container: React.FC<Props> = ({
  children,
  parentBlock = null,
  justifyContent = "flex-start",
  flexDirection = "row",
}) => {
  const classes = [b()];
  if (parentBlock) {
    const parentBEM = parentBlock("container");
    classes.push(parentBEM);
  }
  const style: CSS.Properties = {
    justifyContent: justifyContent,
    flexDirection: flexDirection,
  };
  return (
    <div style={style} className={classes.join(" ")}>
      {children}
    </div>
  );
};
