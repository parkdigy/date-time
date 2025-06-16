import { beginDateOfDay } from '../src';
import dayjs from 'dayjs';

describe('beginDateOfDay', () => {
  it('beginDateOfDay', () => {
    expect(beginDateOfDay()).toEqual(dayjs().startOf('day').toDate());
    expect(beginDateOfDay(new Date())).toEqual(dayjs().startOf('day').toDate());
    expect(beginDateOfDay(dayjs())).toEqual(dayjs().startOf('day'));
    expect(beginDateOfDay('2025-01-01 10:10:10')).toEqual(dayjs('2025-01-01').startOf('day').toDate());
    expect(beginDateOfDay(2025, 1, 1)).toEqual(dayjs('2025-01-01').startOf('day').toDate());
  });
});
