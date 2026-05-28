'use strict';Object.defineProperty(exports,'__esModule',{value:true});var dayjs=require('dayjs');function beginDateOfDay(dtOrYear, formatOrMonth, day) {
    let dt;
    let format;
    if (typeof dtOrYear === 'number' && typeof formatOrMonth === 'number' && typeof day === 'number') {
        dt = new Date(dtOrYear, formatOrMonth - 1, day);
    }
    else {
        dt = dtOrYear;
        format = formatOrMonth;
    }
    if (dt === undefined || dt instanceof Date || typeof dt === 'string') {
        return dayjs(dt, format).startOf('day').toDate();
    }
    else {
        return dayjs(dt).startOf('day');
    }
}function beginDateOfMonth(dtOrYear, formatOrMonth) {
    let dt;
    let format;
    if (typeof dtOrYear === 'number' && typeof formatOrMonth === 'number') {
        dt = new Date(dtOrYear, formatOrMonth - 1, 1);
    }
    else {
        dt = dtOrYear;
        format = formatOrMonth;
    }
    if (dt === undefined || dt instanceof Date || typeof dt === 'string') {
        return dayjs(dt, format).startOf('month').toDate();
    }
    else {
        return dayjs(dt).startOf('month');
    }
}function endDateOfDay(dtOrYear, formatOrMonth, day) {
    let dt;
    let format;
    if (typeof dtOrYear === 'number' && typeof formatOrMonth === 'number' && typeof day === 'number') {
        dt = new Date(dtOrYear, formatOrMonth - 1, day);
    }
    else {
        dt = dtOrYear;
        format = formatOrMonth;
    }
    if (dt === undefined || dt instanceof Date || typeof dt === 'string') {
        return dayjs(dt, format).endOf('day').toDate();
    }
    else {
        return dayjs(dt).endOf('day');
    }
}function endDateOfMonth(dtOrYear, formatOrMonth) {
    let dt;
    let format;
    if (typeof dtOrYear === 'number' && typeof formatOrMonth === 'number') {
        dt = new Date(dtOrYear, formatOrMonth - 1, 1);
    }
    else {
        dt = dtOrYear;
        format = formatOrMonth;
    }
    if (dt === undefined || dt instanceof Date || typeof dt === 'string') {
        return dayjs(dt, format).endOf('month').toDate();
    }
    else {
        return dayjs(dt).endOf('month');
    }
}/********************************************************************************************************************
 * 날짜를 분해하여 반환
 * - date, year, month, day, weekDay, hour, minute, second, millisecond
 * @param dt 날짜
 * @returns 분해된 날짜
 * ******************************************************************************************************************/
function extractDate(dt) {
    const date = dayjs(dt);
    return {
        date: date.toDate(),
        year: date.year(),
        month: date.month() + 1,
        day: date.date(),
        weekDay: date.day(),
        hour: date.hour(),
        minute: date.minute(),
        second: date.second(),
        millisecond: date.millisecond(),
    };
}/********************************************************************************************************************
 * 날짜를 주어진 형식의 텍스트로 변환
 * - 기본 형식 : YYYY-MM-DD HH:mm:ss
 * @param date 날짜
 * @param format 형식
 * @returns 형식화된 날짜
 * ******************************************************************************************************************/
function formatDate(date, format) {
    if (date === null) {
        return null;
    }
    else if (date === undefined) {
        return undefined;
    }
    else {
        return dayjs(date).format(format === undefined ? 'YYYY-MM-DD HH:mm:ss' : format);
    }
}/********************************************************************************************************************
 * 현재 시간의 Date 객체를 반환하는 함수
 * ******************************************************************************************************************/
function now() {
    return new Date();
}/********************************************************************************************************************
 * 현재 시간의 Dayjs 객체를 반환하는 함수
 * ******************************************************************************************************************/
function nowJs() {
    return dayjs();
}/********************************************************************************************************************
 * 현재 시간의 Time 값을 반환하는 함수
 * ******************************************************************************************************************/
function nowTime() {
    return new Date().getTime();
}/********************************************************************************************************************
 * 현재 년도를 YYYY 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
function nowY() {
    return new Date().getFullYear();
}/********************************************************************************************************************
 * 현재 년월을 YYYYMM 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
function nowYm() {
    return Number(dayjs().format('YYYYMM'));
}/********************************************************************************************************************
 * 현재 년월일을 YYYYMMDD 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
function nowYmd() {
    return Number(dayjs().format('YYYYMMDD'));
}/********************************************************************************************************************
 * 현재 년월일시를 YYYYMMDDHH 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
function nowYmdh() {
    return Number(dayjs().format('YYYYMMDDHH'));
}/********************************************************************************************************************
 * 현재 년월일시분을 YYYYMMDDHHmm 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
function nowYmdhm() {
    return Number(dayjs().format('YYYYMMDDHHmm'));
}/********************************************************************************************************************
 * 현재 년월일시분초를 YYYYMMDDHHmmss 형식의 숫자로 반환하는 함수
 * ******************************************************************************************************************/
function nowYmdhms() {
    return Number(dayjs().format('YYYYMMDDHHmmss'));
}function getY(dt, format) {
    if (dt === undefined) {
        return new Date().getFullYear();
    }
    else {
        return dayjs(dt, format).year();
    }
}function getYm(dt, format) {
    if (dt === undefined) {
        return Number(dayjs().format('YYYYMM'));
    }
    else {
        return Number(dayjs(dt, format).format('YYYYMM'));
    }
}function getYmd(dt, format) {
    if (dt === undefined) {
        return Number(dayjs().format('YYYYMMDD'));
    }
    else {
        return Number(dayjs(dt, format).format('YYYYMMDD'));
    }
}function getYmdh(dt, format) {
    if (dt === undefined) {
        return Number(dayjs().format('YYYYMMDDHH'));
    }
    else {
        return Number(dayjs(dt, format).format('YYYYMMDDHH'));
    }
}function getYmdhm(dt, format) {
    if (dt === undefined) {
        return Number(dayjs().format('YYYYMMDDHHmm'));
    }
    else {
        return Number(dayjs(dt, format).format('YYYYMMDDHHmm'));
    }
}function getYmdhms(dt, format) {
    if (dt === undefined) {
        return Number(dayjs().format('YYYYMMDDHHmmss'));
    }
    else {
        return Number(dayjs(dt, format).format('YYYYMMDDHHmmss'));
    }
}/********************************************************************************************************************
 * week day 에 해당하는 요일을 한글로 반환하는 함수
 * ******************************************************************************************************************/
function weekdayText(weekDay) {
    switch (weekDay) {
        case 0:
            return '일';
        case 1:
            return '월';
        case 2:
            return '화';
        case 3:
            return '수';
        case 4:
            return '목';
        case 5:
            return '금';
        case 6:
            return '토';
        default:
            return '';
    }
}var index = {
    beginOfDay: beginDateOfDay,
    beginOfMonth: beginDateOfMonth,
    endOfDay: endDateOfDay,
    endOfMonth: endDateOfMonth,
    extract: extractDate,
    format: formatDate,
    now,
    nowJs,
    nowTime,
    nowY,
    nowYm,
    nowYmd,
    nowYmdh,
    nowYmdhm,
    nowYmdhms,
    getY,
    getYm,
    getYmd,
    getYmdh,
    getYmdhm,
    getYmdhms,
    weekdayText,
};exports.beginDateOfDay=beginDateOfDay;exports.beginDateOfMonth=beginDateOfMonth;exports.default=index;exports.endDateOfDay=endDateOfDay;exports.endDateOfMonth=endDateOfMonth;exports.extractDate=extractDate;exports.formatDate=formatDate;exports.getY=getY;exports.getYm=getYm;exports.getYmd=getYmd;exports.getYmdh=getYmdh;exports.getYmdhm=getYmdhm;exports.getYmdhms=getYmdhms;exports.now=now;exports.nowJs=nowJs;exports.nowTime=nowTime;exports.nowY=nowY;exports.nowYm=nowYm;exports.nowYmd=nowYmd;exports.nowYmdh=nowYmdh;exports.nowYmdhm=nowYmdhm;exports.nowYmdhms=nowYmdhms;exports.weekdayText=weekdayText;