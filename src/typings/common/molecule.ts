import { SerializedStyles } from "@emotion/react";
import { IconObject } from "@typings/common/atom.ts";
import React from "react";

export interface SearchBarProps {
  icon?: IconObject;
  width?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  placeholder?: string;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface SearchBarContainerProps {
  width?: string;
  customStyle?: SerializedStyles;
}

export interface RatingProps {
  current: string;
  max?: string;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface RatingContainerProps {
  customStyle?: SerializedStyles;
}

export interface ProfileProps {
  src: string;
  name: string;
  rate?: number;
  variant?: string;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface ProfileContainerProps {
  variant?: string;
  customStyle?: SerializedStyles;
}
