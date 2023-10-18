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
