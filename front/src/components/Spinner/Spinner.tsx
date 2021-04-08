import React, { CSSProperties, useMemo } from "react";
import block from "bem-cn";
import "./Spinner.css";
import { BaseComponentProps } from "../../types/base";

interface Props extends BaseComponentProps {
  size?: number | string;
  lineWidth?: number;
}

const b = block("spinner");

export const Spinner: React.FC<Props> = ({ className = "", size = "1em", lineWidth = 2 }) => {
  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
      borderWidth: lineWidth,
    }),
    [lineWidth, size]
  );
  return <span className={b({}).mix(className)} style={style}></span>;
};
