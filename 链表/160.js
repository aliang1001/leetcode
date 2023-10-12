/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 我来解释一下，为什么把链表连起来，就可以得到相交的部分。

// 首先是两个链表（约定，值相同代表同一节点，0 代表空节点）
// A表：[1, 2, 3, 7, 8, 9]
// B表：[4, 5, 7, 8, 9]

// 连接两个链表（表与表之间用 0 隔开）
// AB表：[1, 2, 3, 7, 8, 9, 0, 4, 5, 7, 8, 9, 0]
// BA表：[4, 5, 7, 8, 9, 0, 1, 2, 3, 7, 8, 9, 0]

// 观察连接后的两个表，可以发现相交的部分整齐的排列在末尾，
// 只需要逐个比较这两张表的节点，就能找到相交的起始位置。

// 如果没有相交会如何？会陷入死循环吗？
// A表：[1, 2, 3]
// B表：[4, 5]

// 连接两个链表（表与表之间用 0 隔开）
// AB表：[1, 2, 3, 0, 4, 5, 0]
// BA表：[4, 5, 0, 1, 2, 3, 0]

// 观察连接后的两个表，可以发现末尾相交的部分必然为空，
// 参照上面的逻辑，返回首个相同的节点，为空是符合题意的。

// 如果连接两表时，不用 0 隔开，表不相交时，就会陷入死循环。

// 但是写代码时，不可能往链表中插入空节点，所以就用一个指针，模拟遍历两个相交表的过程，
// 当指针指向空时，重新指向另一个链表的头节点，否则就指向下一个节点。

// 思考一下，如果两个链表长度相等会如何？

let list = {
  val: 1,
  next: {
    val: 2,
    next: null,
    next: {
      val: 9,
      next: {
        val: 10,
        next: null,
      },
    },
  },
};

let list2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 9,
      next: {
        val: 10,
        next: null,
      },
    },
  },
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};

getIntersectionNode(list, list2);
