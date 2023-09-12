// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    debugger;
    let middle = (left + right) >> 1;
    let value = nums[middle];
    if (target > value) {
      left = middle + 1;
    } else if (target < value) {
      right = middle - 1;
    } else if (value === target) {
      return middle;
    }
  }
  return -1;
};
const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
console.log(search(nums, target));
