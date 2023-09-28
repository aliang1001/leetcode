// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素
// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 定义
 */
var spiralOrder = function (matrix) {
  const n = matrix[0].length; // x 最大
  const m = matrix.length; // y 最大
  let left = 0;
  let top = 0;
  let right = n - 1;
  let bottom = m - 1;
  let result = [];
  // 从左到右
  while (true) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    if (++top > bottom) {
      return result;
    }
    // 从上到下
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    if (--right < left) {
      return result;
    }
    // 从右到左
    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }
    if (--bottom < top) {
      return result;
    }
    // 从左到上
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    if (++left > right) {
      return result;
    }
  }
};
matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(spiralOrder(matrix));
