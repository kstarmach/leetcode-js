/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let record = [];

    for (let ops of operations) {
        if (!isNaN(parseInt(ops))) {
            record.push(parseInt(ops));
        } else if (ops === 'C') {
            record.pop();
        } else if (ops === 'D') {
            let prev = record[record.length - 1];
            record.push(2 * prev);
        } else if (ops === '+') {
            let prev_one = record[record.length - 1];
            let prev_two = record[record.length - 2];
            record.push(prev_one + prev_two);
        }
    }

    return record.reduce((a, b) => a + b, 0);
};