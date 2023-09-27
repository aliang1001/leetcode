// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]

// 寻找左边界
/**
 * let nums = [1, 6, 6, 7, 7, 7, 7, 9, 9, 9];
 * let target = 6;
 * 定义左边界的条件：
 * 1. 当nums[middle] === target时，middle为 0 或者是middle前一位数小于nums[middle]，不然则往左边继续缩圈
    if (nums[middle] === target) {
      if (middle === 0 || nums[middle - 1] < nums[middle]) {
        return middle; 找到左边界
      }
      right = middle - 1; 继续缩圈
    }
   2. 当nums[middle] === target时，middle为,但是middle前一位数不小于nums[middle]，
 */

const findLeftIdx = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = (left + right) >> 1;
    if (nums[middle] === target) {
      if (middle === 0 || nums[middle - 1] < nums[middle]) {
        return middle;
      }
      right = middle - 1;
    }
    if (nums[middle] > target) {
      right = middle - 1;
    }
    if (nums[middle] < target) {
      left = middle + 1;
    }
  }
  return -1;
};

/**
 * 寻找右边界
 * 条件：
 * 1. 跟寻找左边界类似，只不过定义右边界的条件是： middle+1要比 middle大，即：
 *   if (nums[middle] === target) {
      if (middle === nums[nums.length - 1] || nums[middle + 1] > nums[middle]) {
        return middle;
      }
      left = middle + 1;
    }
 */

// 寻找右边界
const findRightIdx = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = (left + right) >> 1;
    if (nums[middle] === target) {
      if (middle === nums.length - 1 || nums[middle + 1] > nums[middle]) {
        return middle;
      }
      left = middle + 1;
    }
    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const result = [findLeftIdx, findRightIdx].map((fn) => fn(nums, target));

  return result;
};

// let nums = [1, 6, 6, 7, 7, 7, 7, 9, 9, 9];
// let target = 6;
let nums = [1];
let target = 1;
console.log(findRightIdx(nums, target));
