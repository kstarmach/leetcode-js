// Binary search 

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let res = nums[0];

    while (left <= right) {
        if (nums[left] < nums[right]) {
            res = Math.min(res, nums[left]); // this part will  be good for edge cases
            break;                           // but will slow a litte, any other 
        }

        let mid = Math.floor((left + right) / 2);
        res = Math.min(res, nums[mid]);
        if (nums[mid] >= nums[0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return res;
};