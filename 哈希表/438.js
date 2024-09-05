// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

// 示例 1:

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
//  示例 2:

// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

/**
 * 思路：
 * 1. 满足字母异位词的条件是
 *  a. 字母异位词与p中出现的字母次数相同｜对字母异位词与p进行字母排序，两个字母之间顺序相同
 * 2. 用滑动窗口，从左到右滑动，每一次移动都判断一下是否符合条件
 */
var findAnagrams = function (s, p) {
  function arrayEqual(a, b) {
    return a.toString() === b.toString();
  }
  let pList = new Array(26).fill(0);
  let sList = new Array(26).fill(0);

  const m = s.length,
    n = p.length;

  const result = [];
  // 统计 p 的字典
  for (val of p) {
    // 统计p的字母偏移量，也就是字母异位词的达成条件
    let value = val.charCodeAt() - 'a'.charCodeAt();
    pList[value]++;
  }
  for (let i = 0; i <= m; i++) {
    sList[s.charCodeAt(i) - 'a'.charCodeAt()]++;

    if (i >= n - 1) {
      if (arrayEqual(pList, sList)) {
        result.push(i - n + 1);
      }
      sList[s.charCodeAt(i - n + 1) - 'a'.charCodeAt()]--;
    }
  }
  return result;
};
