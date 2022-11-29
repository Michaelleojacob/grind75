/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  const count = new Map();
  let res = 0;
  let addOne = false;
  for (const l of s)
    count.has(l) ? count.set(l, count.get(l) + 1) : count.set(l, 1);
  console.log(count);
  for (const [k, v] of count) {
    if (v === 1) addOne = true;
    if (v >= 2 && v % 2 === 0) res += v;
    if (v >= 2 && v % 2 !== 0) {
      res += v - 1;
      addOne = true;
    }
  }
  return addOne ? (res += 1) : res;
};

const longestPalindrome2 = (s) => {
  const map = new Map();
  let res = 0;
  for (const l of s) {
    map.has(l) ? map.set(l, map.get(l) + 1) : map.set(l, 1);
    if (map.get(l) % 2 === 0) res += 2;
  }
  return s.length > res ? res + 1 : res;
};

console.log(longestPalindrome2("abccccdd"));
