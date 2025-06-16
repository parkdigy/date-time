/********************************************************************************************************************
 * 시간을 23:59:59.999 로 변경해서 반환
 * ******************************************************************************************************************/
import { Dayjs } from 'dayjs';
export declare function endDateOfDay(): Date;
export declare function endDateOfDay<T extends Date | Dayjs>(dt: T): T;
export declare function endDateOfDay(dt: string, format?: string): Date;
export declare function endDateOfDay(year: number, month: number, day: number): Date;
export default endDateOfDay;
