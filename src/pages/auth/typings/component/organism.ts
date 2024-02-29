import { SerializedStyles } from "@emotion/react";
import React from "react";

export interface AuthHeaderProps {
  className?: string;
  customStyle?: SerializedStyles;
}

export interface AuthHeaderContainerProps {
  customStyle?: SerializedStyles;
}

export interface LoginFormProps {
  handleClickLogin: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface LoginFormContainerProps {
  customStyle?: SerializedStyles;
}

export interface SocialLoginProps {
  className?: string;
  customStyle?: SerializedStyles;
}

export interface SocialLoginContainerProps {
  customStyle?: SerializedStyles;
}

export interface SignupLinkProps {
  className?: string;
  customStyle?: SerializedStyles;
}

export interface SignupLinkContainerProps {
  customStyle?: SerializedStyles;
}
