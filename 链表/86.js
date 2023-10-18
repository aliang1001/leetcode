// 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
// 你应当 保留 两个分区中每个节点的初始相对位置。
// 输入：head = [1,4,3,2,5,2], x = 3
// 输出：[1,2,2,4,3,5]

// 输入：head = [2,1], x = 2
// 输出：[1,2]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const bigNodeList = new ListNode(0);
  const smaNodeList = new ListNode(0);
  let big = bigNodeList;
  let sma = smaNodeList;

  while (head) {
    if (head.val >= x) {
      big.next = head;
      big = big.next;
    } else {
      sma.next = head;
      sma = sma.next;
    }
    head = head.next;
  }
  sma.next = bigNodeList.next;
  big.next = null;
  return smaNodeList;
};
