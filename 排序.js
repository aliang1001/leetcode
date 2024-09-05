/**
 * 选择排序
 * @param {*} list
 */
const selectionSort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    [list[min], list[i]] = [list[i], list[min]];
  }
  return list;
};

/* 冒泡排序 */
function bubbleSort(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

function quickSort(nums) {
  if (nums.length < 2) return nums;
  let mid = nums.length >> 1;
  let left = [];
  let right = [];
  let middle = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[mid]) {
      right.push(nums[i]);
    }
    if (nums[i] === nums[mid]) {
      middle.push(nums[i]);
    }
    if (nums[i] < nums[mid]) {
      left.push(nums[i]);
    }
  }
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

/**
 * 归并
 */

function mergerSort(nums) {
  if (!nums) return nums;
  return helper(nums);
}
function helper(nums) {
  if (nums.length < 2) return nums;
  let mid = nums.length >> 1;
  let left = helper(nums.slice(0, mid));
  let right = helper(nums.slice(mid));
  return merger(left, right);
}
function merger(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  if (left.length) {
    result.push(...left);
  } else {
    result.push(...right);
  }
  return result;
}

/**
 * 桶排序
 */
function bucketSort(nums) {
  // 初始化 k = n/2 个桶，预期向每个桶分配 2 个元素
  const k = nums.length / 2;
  const buckets = [];
  for (let i = 0; i < k; i++) {
    buckets.push([]);
  }
  // 1. 将数组元素分配到各个桶中
  for (const num of nums) {
    // 输入数据范围为 [0, 1)，使用 num * k 映射到索引范围 [0, k-1]
    const i = Math.floor(num * k);
    // 将 num 添加进桶 i
    buckets[i].push(num);
  }
  // 2. 对各个桶执行排序
  for (const bucket of buckets) {
    // 使用内置排序函数，也可以替换成其他排序算法
    bucket.sort((a, b) => a - b);
  }
  // 3. 遍历桶合并结果
  let i = 0;
  for (const bucket of buckets) {
    for (const num of bucket) {
      nums[i++] = num;
    }
  }
}

/**
 * 思路： 用归并的做法将一个链表分为无数个小链表，达到两个最小粒度后的链表再连接起来
 *  1. 用快慢指针遍历链表获取到中心节点后一分为二切割为左右两个链表
 *  2. 递归
 *  3. 连接
 */

var sortList = function (head) {
  if (!head || !head.next) return head;
  let slow = head;
  let quick = head.next;
  while (quick && quick.next) {
    slow = slow.next;
    quick = quick.next.next;
  }
  let prev = slow.next; // 中心点右边链表的头节点
  slow.next = null; // 链表从中心点断开，一分为二
  let leftList = sortList(head); // 因为中心点断开了，所以head就是左链表
  let rightList = sortList(prev);
  return merge(leftList, rightList);
};

function merge(left, right) {
  let head = new ListNode(0);
  let cur = head;
  while (left && right) {
    if (left.val < right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }
  cur.next = left ? left : right;
  return head.next;
}
