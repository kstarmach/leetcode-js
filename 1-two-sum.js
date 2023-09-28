/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute Force
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// HashMap
var twoSum = function (nums, target) {
    const hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {

        let temp = target - nums[i];

        if (hashMap.has(temp)) {
            return [hashMap.get(temp), i];
        }

        hashMap.set(nums[i], i);
    }
};

