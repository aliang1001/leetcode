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

const reversetList = (head) => {
  let pre = null;
  let cur = head;
  while (cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  debugger;
  return pre;
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseBetween = function (head, left, right) {
  let root = new ListNode(0);
  root.next = head;
  rootNode = root;
  // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
  for (let i = 0; i < left - 1; i++) {
    rootNode = rootNode.next;
  }
  let leftNode = rootNode; // left 前一个节点
  for (let i = 0; i < right - left + 1; i++) {
    rootNode = rootNode.next;
  }
};
reverseBetween(list, 2, 4);
