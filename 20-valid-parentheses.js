/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const temp = [];
    const stack = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 0; i < s.length; i++) {
        if (stack[s[i]]) {
            temp.push(s[i]);
        } else if (temp.length < 1 || stack[temp.pop()] !== s[i]) {
            return false;
        }
    }

    return temp.length === 0;
};