/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 思路：快慢指针从同一个点出发，如果有环必定会相遇。
 * a.条件：head到环入口长度为a, 第一次绕环相遇的长度是b,从相遇的点b到圆环圆点是c，整个圆的周长: b + c，绕环的圈数是k
      1. 慢指针走的路程slow = a + b，快指针fase = a + (b+c)*k + b
      2. 因为快指针比慢指针速度快一倍，因此有  fase = 2 * slow，即: a + (b+c)*k + b = (a+b)*2
        化简： (b+c) * k = a + b ;  设k = 1;
        则有： b+c = a+b
        有c = a

   b.结论：

    	1.结合条件1、2，得出c = a

    	2.结合条件1与结论1： slow再走a步即可到达入口点
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) {
    return head;
  }
  let slow = head;
  let fast = head;
  while (true) {
    if (!fast || !fast.next) {
      return null;
    }
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  fast = head;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
};
