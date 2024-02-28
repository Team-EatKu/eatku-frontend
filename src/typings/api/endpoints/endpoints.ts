import { ParamsType } from "@typings/commonType.ts";

export interface requestParamType {
  apiUrl: string;
  apiParams: ParamsType;
}

export interface ServerResponseDto<T> {
  status: number;
  code: string;
  message: string;
  data: T;
}
