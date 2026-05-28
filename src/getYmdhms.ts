import dayjs, { type Dayjs } from 'dayjs';

/********************************************************************************************************************
 * 지정된 날짜의 년월일시분초를 YYYYMMDDHHmmss 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
export function getYmdhms(): number;
export function getYmdhms(dt: Date | Dayjs): number;
export function getYmdhms(dt: string, format?: string): number;
export function getYmdhms(dt?: Date | Dayjs | string, format?: string): number {
  if (dt === undefined) {
    return Number(dayjs().format('YYYYMMDDHHmmss'));
  } else {
    return Number(dayjs(dt, format).format('YYYYMMDDHHmmss'));
  }
}

export default getYmdhms;
