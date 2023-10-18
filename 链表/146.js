// 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
// 实现 LRUCache 类：
// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
// 示例：
// 输入
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// 输出
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// 解释
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1);    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2);    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1);    // 返回 -1 (未找到)
// lRUCache.get(3);    // 返回 3
// lRUCache.get(4);    // 返回 4

/**
 * 想象这是一摞书
 * get: 抽出一本书(key)，放到最上边
 * put: 放入一本新书(key)，如果已经有这一本书了，则找出这一本书放到最上边，并且替换其新版书的value，如果没有这本书就把这本书放上边，如果已经超过最大capacity的时候，把最底下的书删除掉
 */

/**
 * 数据结构： 用双链表维护书本之间的关系
 * 1.删除x节点
 *  x.prev.next = x.next;
 *  x.next.prev = x.prev
 * 2.增加头节点x
 *  x.prev = dummy;
 *  x.next = x.prev.next
 *  x.prev.next = x;
 *  x.next.prev = x
 */

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class Node {
  constructor(key, val) {
    this.val = val;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.dummy = new Node(0); // 新建哨兵节点
    this.dummy.next = this.dummy;
    this.dummy.prev = this.dummy;
    this.map = new Map();
  }
  get(key) {
    let node = this.getNode(key);
    let reuslt = node ? node.val : -1;
    return reuslt;
  }
  put(key, val) {
    let node = this.getNode(key);
    if (node) {
      node.val = val;
      return;
    }
    let newNode = new Node(key, val);
    this.map.set(key, newNode);
    this.pushFront(newNode); // 放在最上面
    if (this.map.size > this.capacity) {
      let backNode = this.dummy.prev;
      debugger;
      this.map.delete(backNode.key);
      this.remove(backNode);
    }
  }
  getNode(key) {
    if (!this.map.has(key)) {
      return null;
    }
    let node = this.map.get(key);
    this.remove(node); // 把这本书抽出来
    this.pushFront(node);
    return node;
  }
  remove(node) {
    /**
     * 删除节点
     */
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  pushFront(node) {
    /**
     * 把节点放到头部
     */
    node.prev = this.dummy;
    node.next = this.dummy.next;
    node.next.prev = node;
    node.prev.next = node;
  }
}

const lrc = new LRUCache(2);
debugger;
