const createCountObj = (s) =>
  [...s].reduce((a, e) => {
    a[e] = a[e] ? a[e] + 1 : 1;
    return a;
  }, {});

const createMap = (s) => {
  const map = new Map();
  for (const l of s) {
    map.has(l) ? map.set(l, map.get(l) + 1) : map.set(l, 1);
  }
  return map;
};

const canConstruct = (ransomNote, magazine) => {
  if (ransomNote.length > magazine.length) return false;
  const note = createMap(ransomNote);
  const mag = createMap(magazine);
  for (const [k, v] of note) {
    if (!mag.has(k)) return false;
    console.log(mag.get(k), note.get(k));
    if (mag.get(k) < note.get(k)) return false;
  }
  return true;
};

console.log(canConstruct("aa", "ab"));
