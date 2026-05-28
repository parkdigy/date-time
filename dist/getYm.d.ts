import { type Dayjs } from 'dayjs';
/********************************************************************************************************************
 * 지정된 날짜의 년월을 YYYYMM 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
export declare function getYm(): number;
export declare function getYm(dt: Date | Dayjs): number;
export declare function getYm(dt: string, format?: string): number;
export default getYm;
