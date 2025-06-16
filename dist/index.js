'use strict';Object.defineProperty(exports,'__esModule',{value:true});var dayjs=require('dayjs');/********************************************************************************************************************
 * 시간을 00:00:00.0 으로 변경해서 반환
 * ******************************************************************************************************************/
function beginDateOfDay(dtOrYear, formatOrMonth, day) {
    var dt;
    var format;
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
}/********************************************************************************************************************
 * 날짜를 1일로 바꾸고, 시간을 00:00:00.0 으로 변경해서 반환
 * ******************************************************************************************************************/
function beginDateOfMonth(dtOrYear, formatOrMonth) {
    var dt;
    var format;
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
}/********************************************************************************************************************
 * 시간을 23:59:59.999 로 변경해서 반환
 * ******************************************************************************************************************/
function endDateOfDay(dtOrYear, formatOrMonth, day) {
    var dt;
    var format;
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
}/********************************************************************************************************************
 * 날짜를 월의 마지막 일로 바꾸고, 시간을 23:59:59.999 로 변경해서 반환
 * ******************************************************************************************************************/
function endDateOfMonth(dtOrYear, formatOrMonth) {
    var dt;
    var format;
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
    var date = dayjs(dt);
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
    now: now,
    nowJs: nowJs,
    nowTime: nowTime,
    weekdayText: weekdayText,
};exports.beginDateOfDay=beginDateOfDay;exports.beginDateOfMonth=beginDateOfMonth;exports.default=index;exports.endDateOfDay=endDateOfDay;exports.endDateOfMonth=endDateOfMonth;exports.extractDate=extractDate;exports.formatDate=formatDate;exports.now=now;exports.nowJs=nowJs;exports.nowTime=nowTime;exports.weekdayText=weekdayText;