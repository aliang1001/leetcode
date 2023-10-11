// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点

function createLinkedList(arr) {
  // 定义链表节点的构造函数
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  // 边界情况处理，如果输入为空数组，则返回空链表
  if (arr.length === 0) {
    return null;
  }

  // 创建链表的头节点
  let head = new ListNode(arr[0]);
  let current = head;

  // 循环遍历数组，创建链表节点并连接起来
  for (let i = 1; i < arr.length; i++) {
    let newNode = new ListNode(arr[i]);
    current.next = newNode;
    current = newNode;
  }

  return head;
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

var reverse = function (pre, head) {
  if (!head) return pre;
  const temp = head.next;
  head.next = pre;
  pre = head;
  return reverse(pre, temp);
};

var reverseList = function (head) {
  return reverse(null, head);
};

let list1 = {
  value: 1,
  next: null,
};

reverseList(list1);
