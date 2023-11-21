/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }

    // If the loops completes, the first element is 0 so we must unshift 1 at the beggining
    digits.unshift(1);
    return digits;
};