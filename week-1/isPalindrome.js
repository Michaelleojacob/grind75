const isPalindrome = (s) => {
  let reverse = "";
  s = s
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/[^0-9a-z]/gi, "");
  for (let i = s.length - 1; i >= 0; i--) {
    reverse += s[i];
  }
  return reverse === s;
};

// let str = "race a car";
let str = "A man, a plan, a canal: Panama";

// console.log(isPalindrome(str));

const isPalindrome2 = (s) => {
  let reverse = "";
  s = s.toLowerCase().replace(/[^a-z0-9]+|\s+/gim, "");
  for (let i = s.length - 1; i >= 0; i--) {
    reverse += s[i];
  }
  console.log(reverse, s);
  return reverse === s;
};

isPalindrome2(str);
