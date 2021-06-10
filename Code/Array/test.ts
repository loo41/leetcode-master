import { _sort, __sort } from './二分法'
import { _remove } from './移除元素'
import { _orderPow } from './有序数组的平方'
import { _sliderWindow } from './滑动窗口'
import { _screw } from './螺旋矩阵'

test("二分排序", () => {
  expect(_sort([1, 2, 4, 6, 7, 10, 11, 12, 15, 16], 2)).toBe(1);
  expect(_sort([], 2)).toBe(-1);
  expect(__sort([1], 2)).toBe(-1);
});

test("移除元素", () => {
  expect(String(_remove([1, 2, 4, 6, 2, 10, 2, 12, 15, 2], 2))).toContain('1,4,6,10,12,15');
});


test("有序数组的平方", () => {
  expect(String(_orderPow([-4, -3, 0, 1, 2, 4]))).toBe('0,1,4,9,16,16')
});

test("滑动窗口", () => {
  expect(String(_sliderWindow([0, 1, 2, 4], 3))).toBe('1')
});

test("螺旋矩阵", () => {
  expect(String(_screw(3))).toBe('1,2,3,8,9,4,7,6,5')
});
