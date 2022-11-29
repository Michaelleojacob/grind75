/**
 * @param {string}
 * @return {boolean}
 */

const isValid = (s) => {
  const data = [];
  for (let paren of s) {
    if (paren === `)`) {
      if (data.pop() !== "(") return false;
    } else if (paren === `]`) {
      if (data.pop() !== "[") return false;
    } else if (paren === `}`) {
      if (data.pop() !== "{") return false;
    } else {
      data.push(paren);
    }
  }
  return data.length === 0 ? true : false;
};

// isValid("(]");
// isValid("[");

const pairs = {
  ")": "(",
  "]": "[",
  "}": "{",
};

const isValid2 = (s) => {
  const data = [];
  for (let i = 0; i < s.length; i++) {
    if (pairs[s[i]]) {
      if (pairs[s[i]] !== data.pop()) return false;
    } else {
      data.push(s[i]);
    }
  }
  return data.length === 0 ? true : false;
};
