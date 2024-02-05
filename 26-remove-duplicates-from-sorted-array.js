/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    let k = 0;
    let lastValue = nums[k];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === lastValue) {
            continue;
        }

        nums[++k] = nums[i];
        lastValue = nums[k];
    }
    return k + 1;
};