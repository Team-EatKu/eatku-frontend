import { SerializedStyles } from "@emotion/react";

export interface RestaurantActionProps {
  className?: string;
  customStyle?: SerializedStyles;
}

export interface RestaurantActionContainerProps {
  customStyle?: SerializedStyles;
}

export interface InfoProps {
  className?: string;
  customStyle?: SerializedStyles;
}

export interface InfoContainerProps {
  customStyle?: SerializedStyles;
}

export interface DetailProps {
  className?: string;
  customStyle?: SerializedStyles;
}

export interface DetailContainerProps {
  customStyle?: SerializedStyles;
}

export interface MenusProps {
  className?: string;
  customStyle?: SerializedStyles;
}

export interface MenusContainerProps {
  customStyle?: SerializedStyles;
}

export interface ReviewObject {
  content: string;
  imageUrls: Array<string>;
  scope: number;
  user: {
    nickName: string;
    profileImageUrl: string;
  };
}

export interface ReviewProps {
  data: ReviewObject;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface ReviewContainerProps {
  customStyle?: SerializedStyles;
}

export interface ReviewsProps {
  className?: string;
  customStyle?: SerializedStyles;
}

export interface ReviewsContainerProps {
  customStyle?: SerializedStyles;
}
