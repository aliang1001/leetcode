// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

// 示例 1：

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
// 示例 2：

// 输入：nums1 = [1], m = 1, nums2 = [], n = 0
// 输出：[1]
// 解释：需要合并 [1] 和 [] 。
// 合并结果是 [1] 。
// 示例 3：

// 输入：nums1 = [0], m = 0, nums2 = [1], n = 1
// 输出：[1]
// 解释：需要合并的数组是 [] 和 [1] 。
// 合并结果是 [1] 。
// 注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。

// 具体地，我们用两个指针 iii 和 jjj 分别指向两个数组的末尾，用一个指针 kkk 指向合并后的数组的末尾。每次比较两个数组的末尾元素，将较大的元素放在合并后的数组的末尾，然后将指针向前移动一位，重复这个过程，直到两个数组的指针都指向了数组的开头。

// [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let idx = m + n - 1; // nums1最后一个元素下标
  let i = m - 1; // num1有效元素最后一位下标
  let j = n - 1; // nums2最后一个元素下标
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[idx--] = nums1[i--];
    } else {
      nums1[idx--] = nums2[j--];
    }
  }
  while (j >= 0) {
    nums1[idx--] = nums2[j--];
  }
  return nums1;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
