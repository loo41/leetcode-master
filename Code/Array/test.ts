import {_sort, __sort} from './二分法'

test("二分排序", () => {
  expect(_sort([1, 2, 4, 6, 7, 10, 11, 12, 15, 16], 2)).toBe(1);
  expect(_sort([], 2)).toBe(-1);
  expect(__sort([1], 2)).toBe(-1);
});
