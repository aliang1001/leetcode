/**
 * 思路：
 * 1. 对长数组用hash统计出现数字的个数
 * 2. 遍历短数组，并且探测出现的数组是否在长数组hash中，如果在就加入结果数组并且将长数组的hash所对应的数字各数减1
 */
var intersect = function (nums1, nums2) {
  let [long, short] =
    nums1.length > nums2.length ? [nums1, nums2] : [nums2, nums1];
  let longMap = new Map();
  for (key of long) {
    longMap.set(key, (longMap.get(key) || 0) + 1);
  }
  return short.reduce((prev, cur) => {
    const count = longMap.get(cur);
    if (count) {
      prev.push(cur);
      longMap.set(cur, count - 1);
    }
    return prev;
  }, []);
};
