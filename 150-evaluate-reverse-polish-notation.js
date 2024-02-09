/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(parseInt(tokens[i]))) {
            stack.push(parseInt(tokens[i]));
        } else {
            let first = stack.pop();
            let second = stack.pop();
            let operator = tokens[i];

            if (operator === '+') {
                stack.push(second + first);
            }
            if (operator === '-') {
                stack.push(second - first);
            }
            if (operator === '*') {
                stack.push(second * first);
            }
            if (operator === '/') {
                stack.push(Math.trunc(second / first));
            }
        }
    }
    return stack[stack.length - 1];
};