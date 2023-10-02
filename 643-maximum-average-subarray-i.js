function findMaxAverage(nums, k) {
    // Calculate the initial sum of the first 'k' elements using reduce
    const initialSum = nums.slice(0, k).reduce((acc, num) => acc + num, 0);

    // Initialize variables to keep track of the maximum sum and the current sum
    let maxSum = initialSum;
    let windowSum = initialSum;

    // Iterate from index 'k' to the end of the array 'nums'
    for (let right = k; right < nums.length; right++) {
        // Update 'windowSum' by removing the leftmost element of the previous window
        // and adding the rightmost element of the current window
        windowSum += nums[right] - nums[right - k];

        // Update 'maxSum' with the maximum of its current value and 'windowSum'
        maxSum = Math.max(maxSum, windowSum);
    }

    // Return the maximum average by dividing 'maxSum' by 'k'
    return maxSum / k;
}
