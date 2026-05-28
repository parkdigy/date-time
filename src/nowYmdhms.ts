import dayjs from 'dayjs';

/********************************************************************************************************************
 * 현재 년월일시분초를 YYYYMMDDHHmmss 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
export function nowYmdhms(): number {
  return Number(dayjs().format('YYYYMMDDHHmmss'));
}

export default nowYmdhms;
