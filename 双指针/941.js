// 给定一个整数数组 arr，如果它是有效的山脉数组就返回 true，否则返回 false。

// 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

// arr.length >= 3
// 在 0 < i < arr.length - 1 条件下，存在 i 使得：
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }
  let left = 0;
  let right = arr.length - 1;
  while (arr[left] < arr[left + 1]) {
    left++;
  }
  while (arr[right] < arr[right - 1]) {
    right--;
  }
  if (left === right && left !== 0 && right !== arr.length - 1) {
    return true;
  }
  return false;
};
console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
