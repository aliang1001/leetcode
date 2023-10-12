// 给你单链表的头结点 head ，请你找出并返回链表的中间结点。

// 如果有两个中间结点，则返回第二个中间结点。
// 输入：head = [1,2,3,4,5]
// 输出：[3,4,5]
// 解释：链表只有一个中间结点，值为 3 。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head;
  let quick = head;
  while (quick && quick.next) {
    slow = slow.next;
    quick = quick.next.next;
  }
  return slow;
};
