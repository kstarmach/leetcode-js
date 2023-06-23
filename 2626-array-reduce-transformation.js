/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    const numsLength = nums.length;
    let result = fn(init, nums[0]);

    if (numsLength == 0) return init;
    if (numsLength == 1) return result;


    for (let i = 1; i < numsLength; i++) {
        result = fn(result, nums[i]);
    }

    return result;
};