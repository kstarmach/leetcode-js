/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    const size = flowerbed.length;
    let countEmpty = 0;

    for (let i = 0; i <= size; i++) {

        if (i < size && flowerbed[i] == 0) {
            countEmpty++;
            if (i == 0) countEmpty++;
            if (i == size - 1) countEmpty++;;
        } else {
            n -= Math.trunc((countEmpty - 1) / 2);
            if (n <= 0) return true;
            countEmpty = 0;
        }

    }

    return false;
};