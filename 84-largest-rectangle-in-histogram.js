/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0);
    const n = heights.length;
    let stack = [];
    let maxArea = 0;

    for(let i = 0; i < n; i++){
        let start = i;
        while(stack.length && stack[stack.length - 1][1] > heights[i]){
            let [pos, height] = stack.pop();
            maxArea = Math.max(maxArea, (i - pos) * height);
            start = pos;
        }
        stack.push([start, heights[i]]);
    }
    return maxArea;
};