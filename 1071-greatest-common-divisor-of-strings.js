/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return ""

    const gcd = function euclideanAlgorithm(a, b) {
        // Cover  to length
        a = a.length;
        b = b.length;

        // Find the greatest common divisor (GCD)
        while (b !== 0) {
            var remainder = a % b;
            a = b;
            b = remainder;
        }

        // Return the GCD
        return a;
    }

    return str1.slice(0, gcd(str1, str2));
};