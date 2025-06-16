import { endDateOfDay } from '../src';
import dayjs from 'dayjs';

describe('endDateOfDay', () => {
  it('endDateOfDay', () => {
    expect(endDateOfDay()).toEqual(dayjs().endOf('day').toDate());
    expect(endDateOfDay(new Date())).toEqual(dayjs().endOf('day').toDate());
    expect(endDateOfDay(dayjs())).toEqual(dayjs().endOf('day'));
    expect(endDateOfDay('2025-01-01 10:10:10')).toEqual(dayjs('2025-01-01').endOf('day').toDate());
    expect(endDateOfDay(2025, 1, 1)).toEqual(dayjs('2025-01-01').endOf('day').toDate());
  });
});
