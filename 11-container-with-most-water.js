// Brute force
// Time Limit Exceeded
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let area = (j - i) * Math.min(height[i], height[j]);
            result = Math.max(result, area);
        }
    }
    return result;
};

// Two pointer

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let result = 0;
    let leftPointer = 0;
    let rightPointer = height.length - 1;

    while (leftPointer < rightPointer) {
        let area = (rightPointer - leftPointer) * Math.min(height[leftPointer], height[rightPointer]);
        result = Math.max(result, area);

        if (height[leftPointer] > height[rightPointer]) {
            rightPointer--;
        } else {
            leftPointer++;
        }
    }
    return result;
};