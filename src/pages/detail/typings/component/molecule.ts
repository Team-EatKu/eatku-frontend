import { SerializedStyles } from "@emotion/react";

export interface MenuProps {
  name: string;
  price?: number;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface MenuContainerProps {
  customStyle?: SerializedStyles;
}
