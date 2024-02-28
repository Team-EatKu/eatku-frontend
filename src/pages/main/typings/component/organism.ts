import { SerializedStyles } from "@emotion/react";

export interface RecommendListProps {
  title: string;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface RecommendListContainerProps {
  customStyle?: SerializedStyles;
}

export interface RecommendViewProps {
  className?: string;
  customStyle?: SerializedStyles;
}

export interface RecommendViewContainerProps {
  customStyle?: SerializedStyles;
}

export interface TitleProps {
  name: string;
  lectureBuilding: string;
  baseLocation?: string;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface TitleContainerProps {
  customStyle?: SerializedStyles;
}
