/********************************************************************************************************************
 * 날짜를 1일로 바꾸고, 시간을 00:00:00.0 으로 변경해서 반환
 * ******************************************************************************************************************/
import { Dayjs } from 'dayjs';
export declare function beginDateOfMonth(): Date;
export declare function beginDateOfMonth<T extends Date | Dayjs>(dt: T): T;
export declare function beginDateOfMonth(dt: string, format?: string): Date;
export declare function beginDateOfMonth(year: number, month: number): Date;
export default beginDateOfMonth;
