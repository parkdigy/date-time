import dayjs, { type Dayjs } from 'dayjs';

/********************************************************************************************************************
 * 지정된 날짜의 년도를 YYYY 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
export function getY(): number;
export function getY(dt: Date | Dayjs): number;
export function getY(dt: string, format?: string): number;
export function getY(dt?: Date | Dayjs | string, format?: string): number {
  if (dt === undefined) {
    return new Date().getFullYear();
  } else {
    return dayjs(dt, format).year();
  }
}

export default getY;
