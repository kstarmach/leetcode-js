/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let stack = [];
    let n = position.length;
    let ps = []; // sorted array of [position, speed] by position descending
    for(let i = 0; i < n; i++){
        ps.push([position[i], speed[i]]);
    }
    ps.sort((a,b) => a[0] - b[0]);
    for(let j = n - 1; j >= 0; j--){
        stack.push((target - ps[j][0]) / ps[j][1]);
        if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]){
            stack.pop(); // if car is faster that previous
        }
    }
    return stack.length; // number of fleets
};