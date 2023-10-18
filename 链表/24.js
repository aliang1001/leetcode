// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]
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
 * @return {ListNode}
 */

var swapPairs = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy;
  let cur = dummy.next;
  // 0 -> 1 -> 2 -> 3 -> 4 -> 5
  // pre cur  next
  // 0 -> 2 -> 1 -> 3 -> 4 -> 5
  // pre next cur
  // 0 -> 2 -> 1 -> 3 -> 4 -> 5
  //          pre  cur next
  while (cur && cur.next) {
    let next = cur.next;
    pre.next = next;
    cur.next = next.next;
    next.next = cur;
    pre = cur;
    cur = cur.next;
  }
  return dummy.next;
};
