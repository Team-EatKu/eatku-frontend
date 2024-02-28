import axios from "axios";
import { ParamsType } from "@typings/commonType.ts";
import { ApiType } from "@typings/api/api.ts";
import { DateUtil } from "@util";

const apiUrl = "http://13.125.93.203:8080/";

const instance = axios.create({
  baseURL: apiUrl,
});
export const createAxiosInstance = () => {
  // baseUrl 설정이 없다면 기본 API URL로 설정된다.
  // const instance = axios.create({
  //   baseURL: apiUrl,
  // });
  // /**
  //  * @description axios(instance) interceptors request 추가 (access_token)
  //  */
  // instance.interceptors.request.use((config) => {
  //   const tempConfig = { ...config };
  //   tempConfig.headers.Authorization = `Bearer ${checkAccessToken()}`;
  //   return tempConfig;
  // });
  //
  // /**
  //  * @description axios(instance) interceptors response 추가
  //  * - 서버의 error response 형태를 return
  //  * - 서버의 error code 값에 따른 처리 로직을 작성
  //  */
  // instance.interceptors.response.use(
  //   (response) => response,
  //   async (error) => {
  //     const errorData = error?.response?.data;
  //     const AccessToken = checkAccessToken();
  //
  //     if (errorData?.statusCode === 404) console.log("에러코드 404");
  //     if (errorData?.statusCode === 500) console.log("에러코드 500");
  //     if (errorData) {
  //       const {
  //         config,
  //         response: { status },
  //       } = error;
  //
  //       if (errorData.statusCode === 419 && AccessToken) {
  //         await fetchRefreshToken();
  //         config.headers.Authorization = `Bearer ${sessionStorage.getItem(
  //           Const.TOKEN.user,
  //         )}`;
  //         return axios.request(config);
  //       }
  //       if (error.request) {
  //         console.log("error.request", error.request);
  //       } else {
  //         console.log("error.message", error.message);
  //       }
  //       return Promise.reject(error);
  //     }
  //     return Promise.reject(errorData);
  //   },
  // );
  // return instance;
};

export const replacePathParams = (path: string, parameters: ParamsType) => {
  const paramKeys = Object.keys(parameters);
  const pathItems = path?.toString()?.split("/");
  let realParams = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key of paramKeys) {
    const index = pathItems?.indexOf(`{${key}}`);

    if (index > -1) {
      pathItems[index] = parameters[key];
    } else {
      realParams = { ...realParams, [key]: parameters[key] };
    }
  }
  return { realPath: pathItems?.join("/").toString(), apiParams: realParams };
};

export const get: ApiType = <T>(
  path: string,
  parameters?: ParamsType,
): Promise<T> => {
  const { realPath, apiParams } = replacePathParams(
    path,
    DateUtil.convertDateForParams(parameters || {}),
  );

  return instance
    .get<T>(realPath, { params: apiParams })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      console.log(`/Lib/Api/index.js :: GET :: ${realPath} :: Failed!`);
      return Promise.reject(err);
    });
};
