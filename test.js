/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 先把链表围城一个环，然后计算出需要断开的节点。
 */
var rotateRight = function (head, k) {
  if (!head) {
    return head;
  }
  let cur = head;
  let size = 1;
  while (cur.next) {
    cur = cur.next;
    size++;
  }
  cur.next = head;
  let n = size - (k % size);

  while (n > 0) {
    cur = cur.next;
    n--;
  }
  let pre = cur.next;
  cur.next = null;
  return pre;
};
