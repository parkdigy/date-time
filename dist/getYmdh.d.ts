import { type Dayjs } from 'dayjs';
/********************************************************************************************************************
 * 지정된 날짜의 년월일시를 YYYYMMDDHH 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
export declare function getYmdh(): number;
export declare function getYmdh(dt: Date | Dayjs): number;
export declare function getYmdh(dt: string, format?: string): number;
export default getYmdh;
