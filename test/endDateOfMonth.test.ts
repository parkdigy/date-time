import { endDateOfMonth } from '../src';
import dayjs from 'dayjs';

describe('endDateOfMonth', () => {
  it('endDateOfMonth', () => {
    expect(endDateOfMonth()).toEqual(dayjs().endOf('month').toDate());
    expect(endDateOfMonth(new Date())).toEqual(dayjs().endOf('month').toDate());
    expect(endDateOfMonth(dayjs())).toEqual(dayjs().endOf('month'));
    expect(endDateOfMonth('2025-10-01 10:10:10')).toEqual(dayjs('2025-10-01').endOf('month').toDate());
    expect(endDateOfMonth(2025, 10)).toEqual(dayjs('2025-10-01').endOf('month').toDate());
  });
});
