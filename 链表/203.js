// 题意：删除链表中等于给定值 val 的所有节点。

// 示例 1： 输入：head = [1,2,6,3,4,5,6], val = 6 输出：[1,2,3,4,5]

// 示例 2： 输入：head = [], val = 1 输出：[]

// 示例 3： 输入：head = [7,7,7,7], val = 7 输出：[]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// 1. 迭代法
// 因为head可能会被删除掉，所以先给于一个empy头节点
var removeElements = function (head, val) {
  let roomNode = new ListNode(0);
  roomNode.next = head;
  let prev = roomNode;
  while (prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return roomNode.next;
};

// 2. 递归
var removeElements = function (head, val) {
  if (!head) {
    return null;
  }
  head.next = removeElements(head.next);
  if (head.val === val) {
    return head.next;
  }
  return head;
};
