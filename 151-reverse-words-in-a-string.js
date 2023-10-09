/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // \s is a shorthand character class in regular expressions that matches any whitespace character
    // The + quantifier is used after \s, and it means "one or more."
    return s.trim().split(/\s+/).reverse().join(' ');
};