/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let m = Math.max(...nums);
    let maxIndex = nums.indexOf(m);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== m && (2 * nums[i]) > m) {
            return -1
        }
    }
    return maxIndex;
};