import { SerializedStyles } from "@emotion/react";
import React from "react";
import { ParamsType } from "@typings/commonType.ts";

export interface AuthHeaderProps {
  className?: string;
  customStyle?: SerializedStyles;
}

export interface AuthHeaderContainerProps {
  customStyle?: SerializedStyles;
}

export interface LoginFormProps {
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

export interface SignUpHeaderProps {
  step: string;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface SignUpHeaderContainerProps {
  customStyle?: SerializedStyles;
}

export interface SignUpFormProps {
  step: string;
  params: ParamsType;
  onChangeParams: (field: string, value: any) => void;
  handleClickButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface SignUpFormContainerProps {
  customStyle?: SerializedStyles;
}

export type AuthStepType = "email" | "code" | "nickName" | "password";

export interface EmailStepProps {
  params: ParamsType;
  onChangeParams: (field: string, value: any) => void;
  handleClickButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface EmailStepContainerProps {
  customStyle?: SerializedStyles;
}

export interface CodeStepProps {
  params: ParamsType;
  onChangeParams: (field: string, value: any) => void;
  handleClickButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface CodeStepContainerProps {
  customStyle?: SerializedStyles;
}

export interface NicknameStepProps {
  params: ParamsType;
  onChangeParams: (field: string, value: any) => void;
  handleClickButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface NicknameStepContainerProps {
  customStyle?: SerializedStyles;
}

export interface PasswordStepProps {
  params: ParamsType;
  onChangeParams: (field: string, value: any) => void;
  handleClickButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  customStyle?: SerializedStyles;
}

export interface PasswordStepContainerProps {
  customStyle?: SerializedStyles;
}
