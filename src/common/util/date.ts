import dayjs from "dayjs";
import "dayjs/locale/ko.js";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { DateValueType } from "@typings/util/date.ts";
import { ParamsType } from "@typings/commonType.ts";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

/**
 * @description 서비스를 이용하는 사용자의 타임존
 * @type {string}
 */
const currentTimeZone: string =
  Intl.DateTimeFormat().resolvedOptions().timeZone;

/**
 * @description 서비스를 이용하는 사용자의 locale
 * @type {string}
 */
export const currentLocale: string =
  Intl.DateTimeFormat().resolvedOptions().locale;

/**
 * @description 날짜 형식을 서식화 해주는 함수
 *
 * @params  {string} fmt - 날짜 출력 format
 * @params  {timestamp} date - 포맷팅하려는 date
 * @params  {timestamp} [tz] - 적용하려는 timezone
 * @returns {string} date
 */
export const format = (format: string, timestamp: DateValueType): string => {
  dayjs.locale(currentLocale || "ko");
  const time = dayjs(timestamp).tz(currentTimeZone || "Asia/Seoul");

  switch (format) {
    case "LLLL":
      return time.format("LLLL"); // 2023년 2월 20일 월요일 오전 12:19
    case "LLL":
      return time.format("LLL"); // 2023년 2월 20일 오전 12:20
    case "LTS":
      return time.format("LTS"); // 오전 12:19:47
    case "LT":
      return time.format("LT"); // 오전 12:19
    case "L":
      return time.format("L"); // 2023.02.20.
    case "llll":
      return time.format("llll"); // 2023년 2월 20일 월요일 오전 12:19
    case "lll":
      return time.format("lll"); // 2023년 2월 20일 오전 12:24
    case "ll":
      return time.format("ll"); // 2023년 2월 20일
    case "l":
      return time.format("l"); // 2023.02.20.
    case "dash":
      return time.format("YYYY-MM-DD"); // 2023-02-20
    case "point":
      return time.format("YYYY.MM.DD"); // 2023.02.20
    case "pointShort":
      return time.format("YY.MM.DD"); // 23.02.20
    case "time":
      return time.format("YYYY.MM.DD HH:mm"); // 2023.02.20 00:21
    case "fullTime":
      return time.format("YYYY-MM-DD HH:mm:ss"); // 2023-02-20 00:22:07
    case "longNumber":
      return time.format("YYYYMMDD"); // 20230220
    case "number":
      return time.format("YYMMDD"); // 230220
    case "year":
      return time.format("YYYY"); // 2023
    default:
      return time.format(format);
  }
};

/**
 * @description UTC 시간대로 date 변경하는 함수
 * @param {string} value : 변환할 string 값
 * @return {string}
 */
export const convertUTCDate = (value: DateValueType): string => {
  return dayjs(value).toISOString();
};

/**
 * @description date 객체로 변경해주는 함수
 * @param {DateValueType} value : 변환할 date 객체
 * @return {string}
 */
export const convertDate = (value: DateValueType) => {
  return dayjs(value).toDate();
};

/**
 * @description API 호출 시, 파라미터 값의 date 타입을 UTC 기준으로 변환해주는 함수
 * @param params
 * @return {Object}
 */
export const convertDateForParams = (params: ParamsType): ParamsType => {
  const regExp1 = /(\d{4})-(\d{2})-(\d{2})/;
  const regExp2 = /(\d{4}).(\d{2}).(\d{2}) (\d{2}):(\d{2})/;

  const apiParams = { ...params };
  Object.entries(apiParams).forEach(([key, value]) => {
    if (
      dayjs(value).isValid() &&
      (regExp1.test(value) || regExp2.test(value))
    ) {
      apiParams[key] = convertUTCDate(value);
    }
  });
  return apiParams;
};
