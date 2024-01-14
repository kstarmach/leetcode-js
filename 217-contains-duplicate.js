/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashMap = new Map();

    for (const n of nums) {
        if (hashMap.has(n)) {
            return true;
        } else {
            hashMap.set(n);
        }
    }

    return false;
};