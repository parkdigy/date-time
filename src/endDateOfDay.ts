/********************************************************************************************************************
 * 시간을 23:59:59.999 로 변경해서 반환
 * ******************************************************************************************************************/

import dayjs, { Dayjs } from 'dayjs';

export function endDateOfDay(): Date;
export function endDateOfDay<T extends Date | Dayjs>(dt: T): T;
export function endDateOfDay(dt: string, format?: string): Date;
export function endDateOfDay(year: number, month: number, day: number): Date;
export function endDateOfDay(dtOrYear?: Date | Dayjs | string | number, formatOrMonth?: string | number, day?: number) {
  let dt: Date | Dayjs | string | undefined;
  let format: string | undefined;

  if (typeof dtOrYear === 'number' && typeof formatOrMonth === 'number' && typeof day === 'number') {
    dt = new Date(dtOrYear, formatOrMonth - 1, day);
  } else {
    dt = dtOrYear as Date | Dayjs | string | undefined;
    format = formatOrMonth as string | undefined;
  }

  if (dt === undefined || dt instanceof Date || typeof dt === 'string') {
    return dayjs(dt, format).endOf('day').toDate();
  } else {
    return dayjs(dt).endOf('day');
  }
}

export default endDateOfDay;
