export * from './beginDateOfDay';
export * from './beginDateOfMonth';
export * from './endDateOfDay';
export * from './endDateOfMonth';
export * from './extractDate';
export * from './formatDate';
export * from './now';
export * from './nowJs';
export * from './nowTime';
export * from './weekdayText';

import beginDateOfDay from './beginDateOfDay';
import beginDateOfMonth from './beginDateOfMonth';
import endDateOfDay from './endDateOfDay';
import endDateOfMonth from './endDateOfMonth';
import extractDate from './extractDate';
import formatDate from './formatDate';
import now from './now';
import nowJs from './nowJs';
import nowTime from './nowTime';
import weekdayText from './weekdayText';

export default {
  beginOfDay: beginDateOfDay,
  beginOfMonth: beginDateOfMonth,
  endOfDay: endDateOfDay,
  endOfMonth: endDateOfMonth,
  extract: extractDate,
  format: formatDate,
  now,
  nowJs,
  nowTime,
  weekdayText,
};
