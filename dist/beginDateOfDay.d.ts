/********************************************************************************************************************
 * 시간을 00:00:00.0 으로 변경해서 반환
 * ******************************************************************************************************************/
import { Dayjs } from 'dayjs';
export declare function beginDateOfDay(): Date;
export declare function beginDateOfDay<T extends Date | Dayjs>(dt: T): T;
export declare function beginDateOfDay(dt: string, format?: string): Date;
export declare function beginDateOfDay(year: number, month: number, day: number): Date;
export default beginDateOfDay;
