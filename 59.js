// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
// 输入：n = 3
// 输出：[[1,2,3],[8,9,4],[7,6,5]]

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // 1. 生成最初的矩阵
  const empyMartix = new Array(n).fill([]).map((item) => new Array(n).fill(''));
  // 2. 打印位置
  let count = 0;
  let top = 0; //上边界
  let right = n - 1; // 右边界
  let bottom = n - 1; // 下边界
  let left = 0; // 左边界

  while (true) {
    // 从左到右打印
    for (let i = left; i <= right; i++) {
      empyMartix[top][i] = ++count;
    }
    if (++top > bottom) {
      // 上边界缩圈
      break;
    }
    // 从上到下
    for (let i = top; i <= bottom; i++) {
      empyMartix[i][right] = ++count;
    }
    if (--right < left) {
      // 右边界缩圈
      break;
    }
    // 从右到左
    for (let i = right; i >= left; i--) {
      empyMartix[bottom][i] = ++count;
    }
    if (--bottom < top) {
      // 下边界缩圈
      break;
    }
    // 从下到上
    for (let i = bottom; i >= top; i--) {
      empyMartix[i][left] = ++count;
    }
    if (++left > right) {
      // 左边界缩圈
      break;
    }
  }
  return empyMartix;
};

generateMatrix(4);
