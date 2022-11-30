const majorityElement = (nums) => {
  if (nums.length === 1) return nums[0];
  const result = [0, 0];
  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
      console.log(result, num, map);
      if (map.get(num) > result[1]) {
        result[0] = num;
        result[1] = map.get(num);
      }
    } else {
      map.set(num, 1);
    }
  }
  return result[0];
};

// console.log(majorityElement([6, 5, 5]));
// console.log(majorityElement([1]));

const majorityElement2 = (nums) => {
  const n = nums.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    if (map.get(nums[i]) > n / 2) return nums[i];
  }
  return -1;
};

var majorityElement3 = function (nums) {
  // Boyer-Moore Voting Algorithm

  let count = 0;
  let candidate = 0;

  for (let num of nums) {
    if (count == 0) {
      candidate = num;
    }
    count += num == candidate ? 1 : -1;
  }

  return candidate;
};
