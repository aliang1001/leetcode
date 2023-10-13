// 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表
// 输入：head = [1,2,3,3,4,4,5]
// 输出：[1,2,5]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 4,
          next: null,
        },
      },
    },
  },
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  const dummy = new ListNode(0, head);
  let cur = dummy;
  while (cur.next) {
    if (cur.next.val === cur.next.next.val) {
      const x = cur.next.val;
      while (cur.next && cur.next.val == x) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};
[1, 2, 2, 4, 4];
deleteDuplicates(list);
