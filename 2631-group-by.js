/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
    const result = {};
    for (let item of this) {
        let temp = fn(item);
        // if result have property temp it means there is a key for that group so .push() to add element
        // if there is no propery , we need to create new array with current element with temp key
        result[temp] ? result[temp].push(item) : result[temp] = [item];
    }
    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */