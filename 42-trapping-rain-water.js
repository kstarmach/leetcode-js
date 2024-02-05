/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let result = 0;
    let leftPointer = 0;
    let rightPointer = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    while (leftPointer < rightPointer) {
        if (height[leftPointer] < height[rightPointer]) {
            leftMax = Math.max(leftMax, height[leftPointer]);
            result += Math.max(0, leftMax - height[leftPointer]);
            leftPointer++;
        } else {
            rightMax = Math.max(rightMax, height[rightPointer]);
            result += Math.max(0, rightMax - height[rightPointer]);
            rightPointer--;
        }
    }

    return result;
};