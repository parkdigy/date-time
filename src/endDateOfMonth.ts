/********************************************************************************************************************
 * 날짜를 월의 마지막 일로 바꾸고, 시간을 23:59:59.999 로 변경해서 반환
 * ******************************************************************************************************************/

import dayjs, { Dayjs } from 'dayjs';

export function endDateOfMonth(): Date;
export function endDateOfMonth<T extends Date | Dayjs>(dt: T): T;
export function endDateOfMonth(dt: string, format?: string): Date;
export function endDateOfMonth(year: number, month: number): Date;
export function endDateOfMonth(dtOrYear?: Date | Dayjs | string | number, formatOrMonth?: string | number) {
  let dt: Date | Dayjs | string | undefined;
  let format: string | undefined;

  if (typeof dtOrYear === 'number' && typeof formatOrMonth === 'number') {
    dt = new Date(dtOrYear, formatOrMonth - 1, 1);
  } else {
    dt = dtOrYear as Date | Dayjs | string | undefined;
    format = formatOrMonth as string | undefined;
  }

  if (dt === undefined || dt instanceof Date || typeof dt === 'string') {
    return dayjs(dt, format).endOf('month').toDate();
  } else {
    return dayjs(dt).endOf('month');
  }
}

export default endDateOfMonth;
