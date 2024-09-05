let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
function BFS(tree) {
  let list = [tree];
  let result = [];
  while (list.length) {
    let node = list.shift();
    result.push(node.val);
    if (node.left) {
      list.push(node.left);
    }
    if (node.right) {
      list.push(node.right);
    }
  }
  return result;
}

function node(val) {
  return {
    val,
    left: null,
    right: null,
  };
}

function inset(val, root) {
  if (!root) {
    return node(val);
  }
  let prev = null;
  let cur = root;
  while (cur) {
    prev = cur;
    if (val > cur.val) {
      cur = cur.right;
    } else {
      cur = cur.left;
    }
  }
  if (val > prev.val) {
    prev.right = node(val);
  } else {
    prev.left = node(val);
  }
  return prev;
}

function insetNode(root) {
  let stack = [root];
  let result = [];
  let cur = root;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur.val);
      cur = cur.left;
    }
    let node = stack.pop();
    result.push(node);
    
  }
  return result;
}
