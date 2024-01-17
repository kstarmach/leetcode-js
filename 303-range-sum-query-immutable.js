/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefix = [];
    let cur = 0;
    for(let n of nums){
        cur += n;
        this.prefix.push(cur);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let right_sum = this.prefix[right];
    let left_sum = left > 0 ? this.prefix[left - 1] : 0;
    return right_sum - left_sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */