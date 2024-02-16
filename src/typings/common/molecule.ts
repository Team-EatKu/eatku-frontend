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

// export interface TagObject {
//   label: string;
//   isActive?: boolean;
//   variant?: string;
//   onClick?: React.MouseEventHandler<HTMLDivElement>;
// }

export interface FilterRowProps {
  label: string;
  tags: Array<string>;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface FilterRowContainerProps {
  customStyle?: SerializedStyles;
}

export interface TagsProps {
  tags: Array<string>;
  variant: string;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface TagsContainerProps {
  customStyle?: SerializedStyles;
}

export interface TextViewProps {
  icon?: IconObject;
  text: string | Array<string>;
  color?: string;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface TextViewContainerProps {
  customStyle?: SerializedStyles;
}
