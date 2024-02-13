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
  onClick?: React.MouseEventHandler<HTMLDivElement>;
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
  variant?: string;
  width?: string;
  height?: string;
  aspectRatio?: string;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface ImageContainerProps {
  src: string;
  variant?: string;
  width?: string;
  height?: string;
  aspectRatio?: string;
  customStyle?: SerializedStyles;
}

export interface InputProps {
  type?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface InputContainerProps {
  width?: string;
  height?: string;
  fontSize?: string;
  customStyle?: SerializedStyles;
}

export interface MapProps {
  className?: string;
  customStyle?: SerializedStyles;
}

export interface MapContainerProps {
  customStyle?: SerializedStyles;
}

export interface LogoProps {
  width?: string;
}

export interface LogoContainerProps {
  width?: string;
}

export interface StarsProps {
  rate: number;
  size?: string;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface StarsContainerProps {
  customStyle?: SerializedStyles;
}
