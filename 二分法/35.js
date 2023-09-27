// 35.搜索插入位置
// 力扣题目链接(opens new window)

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

// 示例 1:

// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:

// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:

// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:

// 输入: [1,3,5,6], 0
// 输出: 0
// #

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length;
  while (left <= right) {
    const middle = (left + right) >> 1;
    if (target > nums[middle]) {
      left = middle + 1;
    } else if (target === nums[middle]) {
      return middle;
    } else {
      right = middle - 1;
    }
  }
  return left;
};

console.log(searchInsert([1], 2));
