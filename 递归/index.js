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

const reverseNodeList = (nodeList) => {
  let left = null;
  let middle = nodeList;
  let right = nodeList.next;
  while (right) {
    middle.next = left;
    left = middle;
  }
};

null, [1, 2, 3, 4];
