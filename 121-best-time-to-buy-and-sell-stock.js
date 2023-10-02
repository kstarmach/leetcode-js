/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buyDay = 0;
    let buyCost = prices[buyDay];

    let sellDay = buyDay + 1;
    let profit = 0;

    while (sellDay < prices.length) {
        if (prices[sellDay] < buyCost) {
            buyCost = prices[sellDay];
        } else {
            profit = Math.max(profit, prices[sellDay] - buyCost);
        }
        sellDay++;
    }

    return profit;
};


// Simplify

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let lowestPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - lowestPrice;

        maxProfit = Math.max(maxProfit, profit);
        lowestPrice = Math.min(lowestPrice, prices[i]);
    }

    return maxProfit;
};