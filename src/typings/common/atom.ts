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
  label?: string;
  variant?: string;
  size?: string;
  leftIcon?: IconObject;
  rightIcon?: IconObject;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface ButtonContainerProps {
  variant?: string;
  size?: string;
  leftIcon?: IconObject;
  rightIcon?: IconObject;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface TagProps {
  label: string;
  icon?: IconObject;
  variant?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface TagContainerProps {
  variant?: string;
  customStyle?: SerializedStyles;
}

export interface ImageProps {
  src: string;
  width?: string;
  height?: string;
  aspectRatio?: string;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface ImageContainerProps {
  src: string;
  width?: string;
  height?: string;
  aspectRatio?: string;
  customStyle?: SerializedStyles;
}
