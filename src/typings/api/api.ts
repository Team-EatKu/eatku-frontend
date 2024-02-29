import { ParamsType } from "@typings/commonType.ts";

export interface ApiType {
  <TResponse>(path: string, parameters?: ParamsType): Promise<TResponse>;
}
