// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。

// 示例 1：

// 输入：S = "ab#c", T = "ad#c"
// 输出：true
// 解释：S 和 T 都会变成 “ac”。
// 示例 2：

// 输入：S = "ab##", T = "c#d#"
// 输出：true
// 解释：S 和 T 都会变成 “”。
// 示例 3：

// 输入：S = "a##c", T = "#a#c"
// 输出：true
// 解释：S 和 T 都会变成 “c”。
// 示例 4：

// 输入：S = "a#c", T = "b"
// 输出：false
// 解释：S 会变成 “c”，但 T 仍然是 “b”。

const joinString = (str) => {
  let slow = 0;
  let quick = 0;
  let result = [];
  while (quick < str.length) {
    if (str[quick] !== '#') {
      result[slow++] = str[quick];
    } else {
      slow--;
      if (slow < 0) {
        slow = 0;
      }
    }
    quick++;
  }
  return result.reduce((prev, cur, idx) => {
    if (idx < slow) {
      prev = prev + cur;
    }
    return prev;
  }, '');
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  // return joinString(s) === joinString(t);
  return [joinString(s), joinString(t)];
};
console.log(backspaceCompare('y#fo##f', 'y#f#o##f'));
