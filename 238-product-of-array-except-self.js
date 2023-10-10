/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let answer = [];
    let numsLength = nums.length;


    let leftPointer = 1;
    for (let i = 0; i < numsLength; i++) {
        answer[i] = leftPointer;
        leftPointer *= nums[i];
    }

    let rightPointer = 1;
    for (let j = numsLength - 1; j >= 0; j--) {
        answer[j] *= rightPointer;
        rightPointer *= nums[j];
    }

    return answer;
};