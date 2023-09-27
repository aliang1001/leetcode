/* 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

  示例：

  输入：s = 7, nums = [2,3,1,2,4,3]
  输出：2
  解释：子数组 [4,3] 是该条件下的长度最小的子数组。 
*/

// nums = [2, 3, 1, 2, 4, 3];
// target = 7;

// 1. 暴力
// var minSubArrayLen = function (target, nums) {
//   let count = Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum >= target) {
//         count = Math.min(count, j - i + 1);
//       }
//     }
//   }
//   return count === Infinity ? 0 : count;
// };

// // 2. 滑动窗口
// const minSubArrayLen = (target, nums) => {
//   let sum = 0;
//   let count = Infinity;

//   for (let i, j = 0; i < nums.length; ) {
//     sum += nums[i];
//     if (sum < target) {
//       i++;
//     } else {
//       count = Math.min(count, i - j + 1);
//       sum + -nums[j];
//       j++;
//     }
//   }
//   return count === Infinity ? 0 : count;
// };

// console.log(minSubArrayLen(target, nums));

const minSubArrayLen = (target, nums) => {
  let sum = 0;
  let count = Infinity;
  for (let i = 0, j = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      count = Math.min(count, i - j + 1);
      sum -= nums[j];
      j++;
    }
  }
  return count === Infinity ? 0 : count;
};

const nums = [2, 3, 1, 2, 4, 3];
const target = 7;
const result = minSubArrayLen(target, nums);
console.log(result);
