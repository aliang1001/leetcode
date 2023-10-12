// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点

let list = {
  val: 1,
  next: {
    val: 2,
    next: null,
    // next: {
    //   val: 2,
    //   next: {
    //     val: 4,
    //     next: null,
    //   },
    // },
  },
};

var hasCycle = function (head) {
  let slow = head;
  let quick = head;
  slow = slow.next;
  quick = quick.next.next;
  while (quick && slow && quick.next) {
    if (quick === slow) {
      return true;
    }
  }
  return false;
};

console.log(hasCycle(list));
debugger;
