import { type Dayjs } from 'dayjs';
/********************************************************************************************************************
 * 지정된 날짜의 년월일을 YYYYMMDD 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
export declare function getYmd(): number;
export declare function getYmd(dt: Date | Dayjs): number;
export declare function getYmd(dt: string, format?: string): number;
export default getYmd;
