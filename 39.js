// 示例 1：

// 输入：candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]
// 解释：
// 2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
// 7 也是一个候选， 7 = 7 。
// 仅有这两种组合。
// 示例 2：

// 输入: candidates = [2,3,5], target = 8
// 输出: [[2,2,2,2],[2,3,3],[3,5]]
// 示例 3：

// 输入: candidates = [2], target = 1
// 输出: []

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];
  function helper(start,path=[]){
    const sum = path.reduce((prev,cur)=> prev+cur,0);
    if(sum >= target){
      if(sum === target){
        result.push(path)
      }
      return  '递归结束' 
    }
    for(let i = start; i < candidates.length; i++){
      helper(i,[...path,candidates[i]]);
    }
  }
  helper(0);
  return result
};

combinationSum([2,3,5],8)