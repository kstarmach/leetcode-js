/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let n = temperatures.length;
    let answer = [];
    let result = new Array(n).fill(0);

    for (let i = n - 1; i >= 0; --i) {
        let current = temperatures[i];

        while (answer.length > 0 && current >= temperatures[answer[0]]) {
            answer.shift();
        }

        if (answer.length > 0) {
            result[i] = answer[0] - i;
        }

        answer.unshift(i);
    }
    return result;
};