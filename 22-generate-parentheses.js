/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];
    let stack = [];
    var backtrack = function (leftCount, rightCount) {
        if (leftCount >= n && rightCount >= n) {
            let res = stack.join("");
            result.push(res);
        }
        if (leftCount < n) {
            stack.push("(");
            backtrack(leftCount + 1, rightCount);
            stack.pop();
        }
        if (rightCount < leftCount) {
            stack.push(')');
            backtrack(leftCount, rightCount + 1);
            stack.pop();
        }
        return result;
    }
    backtrack(0, 0);
    return result;
};