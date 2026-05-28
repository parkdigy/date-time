import dayjs, { type Dayjs } from 'dayjs';

/********************************************************************************************************************
 * 지정된 날짜의 년월일시를 YYYYMMDDHH 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
export function getYmdh(): number;
export function getYmdh(dt: Date | Dayjs): number;
export function getYmdh(dt: string, format?: string): number;
export function getYmdh(dt?: Date | Dayjs | string, format?: string): number {
  if (dt === undefined) {
    return Number(dayjs().format('YYYYMMDDHH'));
  } else {
    return Number(dayjs(dt, format).format('YYYYMMDDHH'));
  }
}

export default getYmdh;
