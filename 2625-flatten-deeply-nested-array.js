/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if (n === 0) return arr;

    let result = [];

    for (let item of arr) {
        // Don't need to check depth because if n === 0 it will return an arr
        if (Array.isArray(item)) {
            // recursive calls to flat(arr, n) to flaten one depth an sub array
            var subArr = flat(item, n - 1);
            result.push(...subArr)
        } else {
            result.push(item);
        }
    }

    return result;
};