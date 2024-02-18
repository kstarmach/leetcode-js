// Binary Search

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let start = 1;
    let end = Math.max(...piles); // Biggest pile, so the min value is 1h

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let h_to_finish = 0;
        for (let p of piles) {
            h_to_finish += Math.ceil(p / mid); // Calculating the time to finish
        }

        if (h_to_finish > h) { // If is higher than the min 'h' we need to move right
            start = mid + 1;
        } else { // else we can try lower the time
            end = mid - 1;
        }
    }

    return start;
};