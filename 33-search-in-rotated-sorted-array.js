/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[start] <= nums[mid]) {
            if (target > nums[mid] || target < nums[start]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            if (target < nums[mid] || target > nums[end]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
};