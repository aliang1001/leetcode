// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

// 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

// 示例 1：

// 输入：x = 4
// 输出：2
// 示例 2：

// 输入：x = 8
// 输出：2
// 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。

// 提示：

// 0 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    middle = (left + right) >> 1;
    if (middle ** 2 < x) {
      left = middle + 1;
    } else if (middle ** 2 > x) {
      right = middle - 1;
    } else if (middle ** 2 === x) {
      return middle;
    }
  }
  return right;
  // 为什么返回right? 因为循环的时候一定会有探顶的操作，用right去探测top的临界点，在最后一定会往比临界点少-1，跳出循环圈的时候right就是正确答案
  // 就比如找出8的平方根，遇到[2,3]的时候=> [3,3]； 这个[3,3]就是探顶操作，肯定不满足条件（3的平方要比 8 大），探顶后一定会往前缩，所以就是right = middle -1; 其实middle - 1就是最终的答案，即执行完毕的right
};
