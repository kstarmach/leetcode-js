/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        const funcLength = functions.length;

        const result = [];
        let count = funcLength;

        for (let i = 0; i < funcLength; i++) {
            const fn = functions[i];
            fn().then(val => {
                result[i] = val;
                count--;

                if (count === 0) return resolve(result);
            }).catch((err) => {
                return reject(err);
            })
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */