/*
 *  QueryKey의 타입
 */
import { ParamsType } from "@typings/commonType.ts";

/**
 * 각 QueryKey 함수의 parameter의 타입을 정의
 */
export interface TableListKeyParamsType {
  name: string;
  apiParams?: ParamsType;
  fetchApi: boolean;
}

export type QueryKeyType = [string] | [string, ParamsType];

export interface QueryKeyFnType {
  (params?: ParamsType): QueryKeyType;
}

export interface QueryKeysType {
  [domainKey: string]: {
    [key: string]: QueryKeyFnType;
  };
}
