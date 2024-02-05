/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    while (leftPointer <= rightPointer) {
        if (numbers[leftPointer] + numbers[rightPointer] > target) {
            rightPointer--;
        } else if (numbers[leftPointer] + numbers[rightPointer] < target) {
            leftPointer++;
        } else {
            return [leftPointer + 1, rightPointer + 1];
        }
    }

    return [];
};