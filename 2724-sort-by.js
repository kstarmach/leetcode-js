/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    // let sortedArr = arr.sort(function (a, b) {
    //     let fnA = fn(a);
    //     let fnB = fn(b);

    //     return fnA - fnB;
    // });

    // One liner
    return arr.sort((a, b) => fn(a) - fn(b));

    //return sortedArr;
};