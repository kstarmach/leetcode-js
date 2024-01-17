/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let s_map = {}
    let t_map = {}

    for (let i = 0; i < s.length; i++) {
        let s_letter = s[i];
        let t_letter = t[i];

        if (!s_map[s_letter]) {
            s_map[s_letter] = 0;
        }

        if (!t_map[t_letter]) {
            t_map[t_letter] = 0;
        }

        s_map[s_letter]++;
        t_map[t_letter]++;
    }

    for (let letter in s_map) {
        if (t_map[letter] !== s_map[letter]) {
            return false;
        }
    }

    return true;
};

/// Using .sort() method 
/// if length is the same, sorted should have same order

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let s_sorted = s.split('').sort().join('');
    let t_sorted = t.split('').sort().join('');

    for (let i = 0; i < s.length; i++) {
        if (s_sorted[i] !== t_sorted[i]) {
            return false;
        }
    }

    return true;
};