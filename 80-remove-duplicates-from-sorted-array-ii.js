// Solution #1

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 2) {
        return nums.length;
    }

    let k = 2;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2]) {
            nums[k++] = nums[i];
        }
    }

    return k;
};

// Two pointers

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        let count = 1;
        while (right < nums.length - 1 && nums[right] === nums[right + 1]) {
            count++;
            right++;
        }

        for (let i = 0; i < Math.min(2, count); i++) {
            nums[left] = nums[right];
            left++;
        }
        right++;
    }
    return left;
};