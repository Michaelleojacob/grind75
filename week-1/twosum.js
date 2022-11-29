const twoSum = (arr, tar) => {
  for (let i = 0; i < arr.length; i++) {
    const diff = tar - arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (diff === arr[j] && j !== i) {
        return [i, j];
      }
    }
  }
};

const array = [2, 7, 11, 15];
const target = 9;

// twoSum(array, target);

const twoSum2 = (arr, targ) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const diff = targ - arr[i];
    if (map.has(diff)) {
      return [i, map.get(diff)];
    }
    map.set(arr[i], i);
  }
};

twoSum2(array, target);
