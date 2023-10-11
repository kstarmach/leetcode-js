/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {

    // alternatively you can use Infinity
    let i = Math.max(...nums);
    let k = i;

    for (let num of nums) {
        if (i >= num) i = num;
        else if (k >= num) k = num
        else return true;
    }

    return false;
};