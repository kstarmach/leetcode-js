/// HashMap

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result = new Map();

    for (let i = 0; i < strs.length; i++) {
        let sorted_str = strs[i].split("").sort().join("");
        if (result.has(sorted_str)) {
            result.set(sorted_str, [...result.get(sorted_str), strs[i]]);
        } else {
            result.set(sorted_str, [strs[i]]);
        }
    }

    return Array.from(result.values());
};

/// With counting letters

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result = {};

    for (let i = 0; i < strs.length; i++) {
        let count_char = new Array(26).fill(0);

        for (let char of strs[i]) {
            count_char[char.charCodeAt() - 97]++;
        }
        
        result[count_char] ? result[count_char].push(strs[i]) : result[count_char] = [strs[i]];
    }

    return Object.values(result);
};