/// HashMap

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let map = new Map();
    map.set(0, 1);
    let result = 0;

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let diff = sum - k;
        if (map.has(diff)) {
            result += map.get(diff);
        }
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1);
        }
    }

    return result;
};

/// Brute Force
/// Time Limit Exceeded

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        let temp = 0;
        for (let j = i; j < nums.length; j++) {
            temp += nums[j];
            if (temp === k) {
                result++;
            }
        }
    }

    return result;
};