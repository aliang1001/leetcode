function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.next = null;
}

function arrayToBinaryTree(nums) {
  if (nums.length === 0) {
    return null;
  }

  const root = new TreeNode(nums[0]);
  const queue = [root];
  let i = 1;

  while (i < nums.length) {
    const node = queue.shift();

    if (nums[i] !== null) {
      node.left = new TreeNode(nums[i]);
      queue.push(node.left);
    }
    i++;

    if (i < nums.length && nums[i] !== null) {
      node.right = new TreeNode(nums[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

var combine = function (n, k) {
  const result = [];
  function helper(startIndex, path = []) {
    if (path.length === k) {
      result.push(path);
      return;
    }
    for (let i = startIndex; i <= n + 1 - k + path.length; i++) {
      helper(i + 1, [...path, i]);
    }
  }
  helper(1);
  return result;
};


let treeList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

let list = [1, 2, 3]

function combinations(nums) {
  // 开头加一个空组合，即不选择任何数字的情况
  const result = [];
  // 1. 遍历这些数字
  for (let n of nums) {
    // 获取当前结果一共有多少，作为子循环的次数
    const length = result.length;
    result.push([n])
    // 2. 子循环
    for (let i = 0; i < length; i++) {
      // 3. 重要点：把上一个结果和下一个数字组合成一个新的结果
      result.push([...result[i], n]);
    }
  }
  return result;
}
// console.log(combinations(list))
/**
 * []
 * 1:  [[1]];
 * 2:  [[1],[2],[1,2]];
 * 3:  [[3],[1,3],[2,3],[1,2,3]] 
 */


function test1(list) {
  let result = [];
  for (val of list) {
    let length = result.length;
    result.push([val]);
    for (let i = 0; i < length; i++) {
      result.push([...result[i], val])
    }
  }
  return result
}


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = []
  function helper(idx, path = []) {
    if (path.length >= k) {
      result.push(path);
      return
    }
    for (let i = idx; i <= n - k + path.length + 1; i++) {
      helper(i + 1, [...path, i])
    }
  };
  helper(1);
  return result
};


let list1 = [1, 2, 3];

function combinations1(nums1) {
  // 开头加一个空组合，即不选择任何数字的情况
  // 1. 遍历这些数字
  // 2. 获取当前结果一共有多少，作为子循环的次数
  // 3. 子循环
  // 4. 重要点：把上一个结果和下一个数字组合成一个新的结果
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    let value = [nums1[i]]
    let length = result.length;
    result.push(value);
    for (let j = 0; j < length; j++) {
      result.push([...result[j], ...value])
    }
  }
  return result;
}


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  let result = [];
  function helper(idx, path = '') {
    if (path.length === digits.length) {
      result.push(path);
      return
    }
    for (val of map[digits[idx]]) {
      let newPath = path + val;
      helper(idx + 1, newPath)
    }
  }
  helper(0)
  return result
};



let candidates = [1,1,2,5,6,7]
let target = 8;

function sum(candidates,target){
  let result = [];
  let sortList = candidates;
  function helper(idx,list=[]){
    let sum = list.reduce((prev,cur)=> prev+cur,0);
    if(sum>=target){
      if(sum === target){
        result.push(list)
      }
      return 
    }
    for(let i = idx; i < sortList.length; i++){
      if(i > idx&&sortList[i-1]=== sortList[i]){
        continue
      } else {
        helper(i+1,[...list,sortList[i]]);
      }
    }
  };
  helper(0);
  return result
}

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let result = [];
  function helper(idx,path=[]){
    let length = path.reduce((prev,cur)=>{
      prev.push(...cur);
      return prev
    },[]).length;
    if(length === s.length){
      result.push(path)
    };
    for(let i = idx; i < s.length; i++){
      let val = i > idx? s.slice(idx,i+1): s[idx];
      if(isPalindrome(val)){
        helper(i+1,[...path,val]);
      } 
    }
  }
  helper(0);
  return result
};

var isPalindrome = function(x) {
  if ( x < 0 ) return false
  let str = '' + x
  return Array.from(str).reverse().join('') === str
};



/**
 * 复原IP
 * @param {*} s 
 */
var restoreIpAddresses = function(s) {
  let list = [];
  function helper(idx,path=[]){
    if(path.length > 3){
      if(s.length === idx){
        list.push(path);
      }
      return 
    }
    for(let i = idx; i < s.length; i++){
      /**
       * 切割条件
       * 1. 小于256;
       * 2. 数字如果超过 1 位数则第一位不能是0
       */
      let value = i > idx ? s.slice(idx,i+1):s[i];
      if(Number(value) < 256){
        if(value.length > 1){
          if(Number(value[0])){
            helper(i+1,[...path,value])
          }
        } else {
          helper(i+1,[...path,value])
        }
      }
    }
  };
  helper(0);
  return list.map(item=>item.join('.'))
};
let s = '0000'


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// [1,2,3] 
var subsets = function(nums) {
  let result = [];
  for(val of nums){
    for(let newVal of [...result]){
      result.push([...newVal,val]);
    }
    result.push([val]);
  };
  result.push([])
  return result
};
// console.log(subsets([1,2,3]))


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets1 = function(nums) {
  let result = [];
  let list = nums.sort((a,b)=> b-a);
   function helper(idx,path=[]){
    for(let i = idx; i < list.length; i++){
      if(i !== idx && list[i] === list[i-1]){
        continue
      } else {
        result.push([...path,list[i]]);
        helper(i+1,[...path,list[i]]);
      }
    }
   };
   helper(0);
   result.push([])
   return result
 };
// console.log(subsets1([4,4,4,1,4]));

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 示例 1：

输入：nums = [4,6,7,7]
输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
示例 2：

输入：nums = [4,4,3,2,1]
输出：[[4,4]]

 */
var findSubsequences = function(nums) {
  let result = [];
  let set = new Set();
  function helper(idx,path=[]){
    if(path.length > 1){
      if(path[path.length -1 ] >= path[path.length-2]){
        let key = path.join(',');
        if (!set.has(key)) {
          result.push([...path]);
          set.add(key);
        }
      } else {
        return 
      }
    }
    for(let i = idx; i < nums.length;i++){
      if(i !== idx && nums[i-1] === nums[i]){
        continue
      } else {
        helper(i+1,[...path,nums[i]]);
      }
    }
  };
  helper(0);
  return result;
};

var findSubsequences = function (nums) {
  let result = [];
  let set = new Set();
  function helper(idx, path) {
    if (path.length > 1) {
      let key = path.join(',');
      if (!set.has(key)) {
        result.push([...path]);
        set.add(key);
      }
    }
    let used = new Set();
    for (let i = idx; i < nums.length; i++) {
      if (used.has(nums[i])) continue;
      if (i !== idx && nums[i - 1] === nums[i]) {
        continue
      } else {
        if(path.length === 0 || nums[i] >= path[path.length - 1]){
          helper(i + 1, [...path, nums[i]]);
        }
      }
    }
  }
  helper(0, []);
  return result;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 * 1. 阶乘
 * 2. 通过可换位置的阶乘排列，可得到所有排列
 * //https://leetcode.cn/problems/permutations/solutions/2363882/46-quan-pai-lie-hui-su-qing-xi-tu-jie-by-6o7h/
 * 时间复杂度 O(N!N) ： N 为数组 nums 的长度；时间复杂度和数组排列的方案数成线性关系，方案数为 N×(N−1)×(N−2)…×2×1 ，即复杂度为 O(N!) ；数组拼接操作 join() 使用 O(N) ；因此总体时间复杂度为 O(N!N) 。
    空间复杂度 O(N) ： 全排列的递归深度为 N ，系统累计使用栈空间大小为 O(N) 。
 */
function permute(nums) {
  const result = [];
  function helper(idx) {
    if(idx === nums.length -1){
      result.push([...nums]);
      return 
    };
    let set = new Set();
    for(let i = idx; i < nums.length;i++){
      if(set.has(nums[i])){
        continue
      } else {
        set.add(nums[i])
      }
      [nums[i], nums[idx]] = [nums[idx], nums[i]]; 
      helper(idx+1);
      [nums[i], nums[idx]] = [nums[idx], nums[i]]; 
    };
  }
  helper(0);
  return result;
}



const nums = [3,1, 2, 1];
console.log(permute(nums));

