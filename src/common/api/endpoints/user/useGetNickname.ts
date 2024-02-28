import { useQuery } from "@tanstack/react-query";
import * as RestApi from "@api/api";
import { requestParamType } from "@typings/api/endpoints/endpoints.ts";

const getNickname = ({ apiUrl, apiParams }: requestParamType) =>
  RestApi.get(apiUrl, apiParams);

export const useGetNickname = ({ apiUrl, apiParams }: requestParamType) =>
  useQuery({
    queryKey: ["user", "nickname"],
    queryFn: () => getNickname({ apiUrl, apiParams }),
  });
