/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        if (nums[i] > maxSum) {
            maxSum = nums[i];
        }
    }

    return maxSum;

    /// Easy to understand 

    let max = -Infinity;
    let min = 0;

    for (let i = 0; i < nums.length; i++) {
        min += nums[i];
        if (min > max) {
            max = min;
        }
        if (min < 0) {
            min = 0;
        }
    }
    
    return max;
};