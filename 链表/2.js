let list = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 4,
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
      val: 4,
      next: null,
    },
  },
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let root = new ListNode(0);
  let cur = root;
  let p1 = l1;
  let p2 = l2;
  let carry = 0;
  while (p1 || p2) {
    let n1 = p1 ? p1.val : 0;
    let n2 = p2 ? p2.val : 0;
    let sum = n1 + n2 + carry;
    carry = Math.floor(sum / 10);
    root.next = new ListNode(sum % 10);
    root = root.next;
    if (p1) {
      p1 = p1.next;
    }
    if (p2) {
      p2 = p2.next;
    }
  }
  if (carry) {
    root.next = new ListNode(carry);
  }
  return cur.next;
};
const result = addTwoNumbers(list, list2);
