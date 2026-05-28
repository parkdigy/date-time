import { type Dayjs } from 'dayjs';
/********************************************************************************************************************
 * 지정된 날짜의 년월일시분을 YYYYMMDDHHmm 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
export declare function getYmdhm(): number;
export declare function getYmdhm(dt: Date | Dayjs): number;
export declare function getYmdhm(dt: string, format?: string): number;
export default getYmdhm;
