import { type Dayjs } from 'dayjs';
/********************************************************************************************************************
 * 지정된 날짜의 년도를 YYYY 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
export declare function getY(): number;
export declare function getY(dt: Date | Dayjs): number;
export declare function getY(dt: string, format?: string): number;
export default getY;
