// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const initMap = [
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ];
  let map = new Map(initMap);
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.get(char)) {
      // 左括号入栈
      stack.push(char);
    } else {
      // 推栈
      const top = stack.pop();
      if (map.get(top) !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
