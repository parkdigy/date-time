import dayjs, { type Dayjs } from 'dayjs';

/********************************************************************************************************************
 * 지정된 날짜의 년월일시분을 YYYYMMDDHHmm 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
export function getYmdhm(): number;
export function getYmdhm(dt: Date | Dayjs): number;
export function getYmdhm(dt: string, format?: string): number;
export function getYmdhm(dt?: Date | Dayjs | string, format?: string): number {
  if (dt === undefined) {
    return Number(dayjs().format('YYYYMMDDHHmm'));
  } else {
    return Number(dayjs(dt, format).format('YYYYMMDDHHmm'));
  }
}

export default getYmdhm;
