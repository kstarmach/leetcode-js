/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var zeroPosition = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[zeroPosition++] = nums[i];
        }
    }

    for (let j = zeroPosition; j < nums.length; j++) {
        nums[j] = 0;
    }
};

// Two Pointer

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let firstPointer = 0;
    let secondPointer = firstPointer + 1;

    while (secondPointer <= nums.length - 1) {
        if (nums[firstPointer] !== 0) {
            firstPointer++;
            secondPointer++;
        } else {    
            if ((nums[secondPointer] !== 0)) {
                [nums[firstPointer], nums[secondPointer]] = [nums[secondPointer], nums[firstPointer]];
                firstPointer++;
            }
            secondPointer++;
        }
    }
};