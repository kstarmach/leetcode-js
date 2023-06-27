/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
};


// Dangerous arr modification with .splice()

// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array[]}
//  */
// var chunk = function (arr, size) {
//     let result = [];

//     while (arr.length) {
//         result.push(arr.splice(0, size));
//     }

//     return result;
// };
