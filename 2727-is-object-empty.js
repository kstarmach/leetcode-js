/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    // In JavaScript, arrays are a type of object. 
    // So, when an array is passed to Object.keys(), 
    // it treats the array as an object and returns an array of indices (property names) 
    // rather than the actual elements.

    return !Object.keys(obj).length;
};