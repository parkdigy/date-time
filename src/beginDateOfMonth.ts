/********************************************************************************************************************
 * 날짜를 1일로 바꾸고, 시간을 00:00:00.0 으로 변경해서 반환
 * ******************************************************************************************************************/

import dayjs, { Dayjs } from 'dayjs';

export function beginDateOfMonth(): Date;
export function beginDateOfMonth<T extends Date | Dayjs>(dt: T): T;
export function beginDateOfMonth(dt: string, format?: string): Date;
export function beginDateOfMonth(year: number, month: number): Date;
export function beginDateOfMonth(dtOrYear?: Date | Dayjs | string | number, formatOrMonth?: string | number) {
  let dt: Date | Dayjs | string | undefined;
  let format: string | undefined;

  if (typeof dtOrYear === 'number' && typeof formatOrMonth === 'number') {
    dt = new Date(dtOrYear, formatOrMonth - 1, 1);
  } else {
    dt = dtOrYear as Date | Dayjs | string | undefined;
    format = formatOrMonth as string | undefined;
  }

  if (dt === undefined || dt instanceof Date || typeof dt === 'string') {
    return dayjs(dt, format).startOf('month').toDate();
  } else {
    return dayjs(dt).startOf('month');
  }
}

export default beginDateOfMonth;
