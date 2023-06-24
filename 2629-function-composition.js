/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
        if (functions.length < 1) return x;

        const functionLength = functions.length;
        let result = functions[functionLength - 1](x);
        for (let i = functionLength - 2; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */