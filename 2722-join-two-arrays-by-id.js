/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    // Concatenate arr1 and arr2
    var concatenatedArr = arr1.concat(arr2);

    // Use an object to store merged objects based on their id
    var mergedObj = {};

    // Iterate over each object in the concatenated array
    concatenatedArr.forEach((obj) => {
        var id = obj.id;

        // Merge properties of the current object into the merged object
        mergedObj[id] = { ...mergedObj[id], ...obj };
    });

    // Create an array of merged objects
    var joinedArray = Object.values(mergedObj);

    // Sort the joinedArray in ascending order based on the id key
    joinedArray.sort((a, b) => a.id - b.id);

    return joinedArray;
};
