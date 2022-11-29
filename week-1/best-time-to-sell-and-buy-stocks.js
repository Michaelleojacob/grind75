const maxProfit = (prices) => {
  let buy = prices[0];
  let profit = 0;
  for (let num of prices) {
    const margin = num - buy;
    profit = Math.max(margin, profit);
    buy = Math.min(num, buy);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
