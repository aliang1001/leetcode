let list = {
  val: 1,
  next: {
    val: 2,
    next: null,
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
var oddEvenList = function (head) {
  if (head == null) {
    return head;
  }
  let even = head.next; // 保留偶数头结点
  let odd = head; // 奇数指针
  let evenCur = even; // 偶数指针
  while (evenCur && evenCur.next) {
    odd.next = evenCur.next;
    odd = odd.next;
    evenCur.next = odd.next;
    evenCur = evenCur.next;
  }
  odd.next = even;
  return head;
};

const f = () => {};
// 完成sort排序函数
const sortF = (arr) => {
  return arr.sort((a, b) => {
    return b - a;
  });
};
// console.log(sortF([1, 2, 3, 45]));
// create a random string of given lengt
