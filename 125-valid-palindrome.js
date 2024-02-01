// Method 1

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let newStr = "";

    for (let c of s) {
        if (/^[0-9a-zA-Z]$/.test(c)) {
            newStr += c.toLowerCase();
        }
    }
    return newStr === newStr.split("").reverse().join("");
};

// Method 2 "Two pointers"

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
        if (!/^[0-9a-zA-Z]$/.test(s[leftPointer])) {
            leftPointer++;
            continue;
        }
        if (!/^[0-9a-zA-Z]$/.test(s[rightPointer])) {
            rightPointer--;
            continue;
        }

        if (s[leftPointer].toLowerCase() !== s[rightPointer].toLowerCase()) {
            return false;
        }

        leftPointer++;
        rightPointer--;
    }

    return true;
};