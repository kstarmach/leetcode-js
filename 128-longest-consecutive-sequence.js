// O(nlogn)

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

// O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 0;
    let temp = 1;
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return 1;
    }
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1] - 1) {
            temp++;
            count = Math.max(count, temp);
        } else if (nums[i] === nums[i + 1]) {
            count = Math.max(count, temp);
        } else {
            temp = 1;
            count = Math.max(count, temp);
        }
    }
    return count;
};