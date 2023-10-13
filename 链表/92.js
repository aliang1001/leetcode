// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]

let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
  let root = new ListNode(0);
  root.next = head;
  // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
  let pre = root;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  let leftNode = pre;
  // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
  for (let i = 0; i < right - left + 1; i++) {
    pre = pre.next;
  }
  let rightNode = pre;
  // 第 3 步：切断出一个子链表（截取链表）
  pre = leftNode;
  leftNode = leftNode.next;
  let tail = rightNode.next;
  pre.next = null;
  rightNode.next = null;
  // 第 4 步：同第 206 题，反转链表的子区间
  reverseLinkedList(leftNode);
  // 注意：切断链接
  // 第 5 步：接回到原来的链表中
  pre.next = rightNode;
  leftNode.next = tail;
  return root.next;
};
const reverseLinkedList = (head) => {
  let pre = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
};
reverseBetween(list, 2, 4);
