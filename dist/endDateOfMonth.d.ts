/********************************************************************************************************************
 * 날짜를 월의 마지막 일로 바꾸고, 시간을 23:59:59.999 로 변경해서 반환
 * ******************************************************************************************************************/
import { Dayjs } from 'dayjs';
export declare function endDateOfMonth(): Date;
export declare function endDateOfMonth<T extends Date | Dayjs>(dt: T): T;
export declare function endDateOfMonth(dt: string, format?: string): Date;
export declare function endDateOfMonth(year: number, month: number): Date;
export default endDateOfMonth;
