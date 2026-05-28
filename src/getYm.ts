import dayjs, { type Dayjs } from 'dayjs';

/********************************************************************************************************************
 * 지정된 날짜의 년월을 YYYYMM 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
export function getYm(): number;
export function getYm(dt: Date | Dayjs): number;
export function getYm(dt: string, format?: string): number;
export function getYm(dt?: Date | Dayjs | string, format?: string): number {
  if (dt === undefined) {
    return Number(dayjs().format('YYYYMM'));
  } else {
    return Number(dayjs(dt, format).format('YYYYMM'));
  }
}

export default getYm;
