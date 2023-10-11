// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

// null [1,2,3,4,5]

// 1. 迭代
var reverseList = function (head) {
  let temp = null,
    pre = null,
    cur = head;
  while (cur) {
    temp = cur.next; // 先保存cur下一个节点，避免cur翻转节点的时候，回不来
    cur.next = pre; // 翻转节点
    pre = cur; // pre 保持翻转节点的引用
    cur = temp; // cur 快进到下一个节点
  }
  return pre;
};
