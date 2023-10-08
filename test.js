// 输入：nums = [3,2,2,3], val = 3
// 输出：2, nums = [2,2]
// 解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。

// 提醒：不能单独删除数组中的某个元素，只能覆盖。

// // 1. 暴力解法
// var removeElement = function (nums, val) {
//   const size = nums.length;
//   let count = 0;
//   for (let i = 0; i < size; i++) {
//     const value = nums[i];
//     if (value == val) {
//       for (let j = i; j < size; j++) {
//         nums[j] = nums[j + 1];
//       }
//       i--;
//       count += 1;
//     }
//   }
//   return size - count;
// };

// //双指针
// var removeElement = (nums, val) => {
//   const size = nums.length;
//   let slow = 0; // 慢指针
//   for (let quick = 0; quick < size; quick++) {
//     const value = nums[quick];
//     // 如果没找到剔除的元素，则慢与快指针同步
//     // 如果找到元素，则慢指针等待覆盖后面的元素
//     if (value !== val) {
//       if (slow !== quick) {
//         //不能是要剔除的元素，所以要判断
//         nums[slow] = nums[quick];
//       }
//       slow++;
//     }
//   }
//   return slow;
// };

//双指针
var removeElement = (nums, val) => {
  const size = nums.length;
  let slow = 0; // 慢指针
  for (let quick = 0; quick < size; quick++) {
    if (nums[quick] !== val) {
      nums[slow++] = nums[quick];
    }
  }
  return slow;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

const result = removeElement(nums, val);
console.log(result);
