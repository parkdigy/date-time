import { type Dayjs } from 'dayjs';
/********************************************************************************************************************
 * 지정된 날짜의 년월일시분초를 YYYYMMDDHHmmss 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
export declare function getYmdhms(): number;
export declare function getYmdhms(dt: Date | Dayjs): number;
export declare function getYmdhms(dt: string, format?: string): number;
export default getYmdhms;
