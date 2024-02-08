import { SerializedStyles } from "@emotion/react";
import React from "react";

export interface IconObject {
  name: string;
  className?: string;
}

export interface IconProps {
  icon: IconObject;
  size?: string;
  color?: string;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface IconContainerProps {
  size?: string;
  color?: string;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface ButtonProps {
  className?: string;
  customStyle?: SerializedStyles;
  label?: string;
  variant?: string;
  size?: string;
  leftIcon?: IconObject;
  rightIcon?: IconObject;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonContainerProps {
  className?: string;
  customStyle?: SerializedStyles;
  variant?: string;
  size?: string;
  leftIcon?: IconObject;
  rightIcon?: IconObject;
}
