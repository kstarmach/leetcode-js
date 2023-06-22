/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe,
        notToBe
    }

    function toBe(anotherVal) {
        if (anotherVal === val) {
            return true;
        }
        throw new Error("Not Equal");
    }

    function notToBe(anotherVal) {
        if (anotherVal !== val) {
            return true;
        }
        throw new Error("Equal");
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */