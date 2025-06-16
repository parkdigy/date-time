import { beginDateOfMonth } from '../src';
import dayjs from 'dayjs';

describe('beginDateOfMonth', () => {
  it('beginDateOfMonth', () => {
    expect(beginDateOfMonth()).toEqual(dayjs().startOf('month').toDate());
    expect(beginDateOfMonth(new Date())).toEqual(dayjs().startOf('month').toDate());
    expect(beginDateOfMonth(dayjs())).toEqual(dayjs().startOf('month'));
    expect(beginDateOfMonth('2025-10-01 10:10:10')).toEqual(dayjs('2025-10-01').startOf('month').toDate());
    expect(beginDateOfMonth(2025, 10)).toEqual(dayjs('2025-10-01').startOf('month').toDate());
  });
});
