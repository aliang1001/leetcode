// 1290. 二进制链表转整数
// 输入：head = [1,0,1]
// 输出：5
// 解释：二进制数 (101) 转化为十进制数 (5)
// 输入：head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
// 输出：18880

/*
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let sum = 0;
  let cur = head;
  while (cur) {
    sum = sum * 2 + cur.val;
    cur = cur.next;
  }
  return sum;
};
var result = getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
