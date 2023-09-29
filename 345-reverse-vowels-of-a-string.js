/**
 * @param {string} s
 * @return {string}
 */

// Double while
var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let low = 0;
    let high = s.length - 1;
    let result = s.split('');

    while (low < high) {
        while (low < high && !vowels.includes(result[low])) {
            low++;
        }
        while (low < high && !vowels.includes(result[high])) {
            high--;
        }

        [result[low], result[high]] = [result[high], result[low]];
        low++;
        high--;
    }

    return result.join('');
};

// Two pointers single while and Set
var reverseVowels = function (s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let low = 0;
    let high = s.length - 1;
    let result = s.split('');

    while (low < high) {
        if (vowels.has(result[low]) && vowels.has(result[high])) {
            [result[low], result[high]] = [result[high], result[low]];
            low++;
            high--;
        } else if (!vowels.has(result[low])) {
            low++;
        } else {
            high--;
        }
    }

    return result.join('');
};
