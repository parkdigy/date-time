/********************************************************************************************************************
 * 시간을 00:00:00.0 으로 변경해서 반환
 * ******************************************************************************************************************/

import dayjs, { Dayjs } from 'dayjs';

export function beginDateOfDay(): Date;
export function beginDateOfDay<T extends Date | Dayjs>(dt: T): T;
export function beginDateOfDay(dt: string, format?: string): Date;
export function beginDateOfDay(year: number, month: number, day: number): Date;
export function beginDateOfDay(
  dtOrYear?: Date | Dayjs | string | number,
  formatOrMonth?: string | number,
  day?: number
) {
  let dt: Date | Dayjs | string | undefined;
  let format: string | undefined;

  if (typeof dtOrYear === 'number' && typeof formatOrMonth === 'number' && typeof day === 'number') {
    dt = new Date(dtOrYear, formatOrMonth - 1, day);
  } else {
    dt = dtOrYear as Date | Dayjs | string | undefined;
    format = formatOrMonth as string | undefined;
  }

  if (dt === undefined || dt instanceof Date || typeof dt === 'string') {
    return dayjs(dt, format).startOf('day').toDate();
  } else {
    return dayjs(dt).startOf('day');
  }
}

export default beginDateOfDay;
