/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let result = 0;
    let strike = 1;
    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            if (nums[i] - nums[i - 1] === 1) {
                strike++;
            } else {
                result = Math.max(strike, result);
                strike = 1;
            }
        }
    }

    return Math.max(result, strike);
};