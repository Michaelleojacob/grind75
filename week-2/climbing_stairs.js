const climbStairs = (n) => {
  const init = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
  if (n < init.length) return init[n];
  let i = init.length - 1;
  while (i < n) {
    init.push(init[i] + init[i - 1]);
    i++;
  }
  return init[i];
};

// console.log(climbStairs(14));

/**
 * f = first
 * s = second
 * c = current count of iterations
 * n = number of iterations
 */
const climbStairs2 = (n) => {
  let [f, s] = [1, 1];
  let c = 1;
  while (c < n) {
    [f, s] = [s, f + s];
    c++;
  }
  return s;
};

console.log(climbStairs2(14));
