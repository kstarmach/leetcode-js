/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sumLeft = 0;
    let sumRight = nums.reduce((acc, curr) => acc + curr, 0)

    for (let i = 0; i < nums.length; i++) {
        sumRight -= nums[i]

        if (sumLeft === sumRight) {
            return i;
        }

        sumLeft += nums[i];
    }
    return -1;
};