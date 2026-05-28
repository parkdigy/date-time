import dayjs, { type Dayjs } from 'dayjs';

/********************************************************************************************************************
 * 지정된 날짜의 년월일을 YYYYMMDD 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
export function getYmd(): number;
export function getYmd(dt: Date | Dayjs): number;
export function getYmd(dt: string, format?: string): number;
export function getYmd(dt?: Date | Dayjs | string, format?: string): number {
  if (dt === undefined) {
    return Number(dayjs().format('YYYYMMDD'));
  } else {
    return Number(dayjs(dt, format).format('YYYYMMDD'));
  }
}

export default getYmd;
