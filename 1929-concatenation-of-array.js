/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return nums.concat(nums);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [];
 
    for(let i = 0; i < 2; i++){
        for(let n of nums){
            ans.push(n);
        }
    }
    
    return ans;
 };