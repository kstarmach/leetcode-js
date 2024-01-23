/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map();
    let bucket = [];
    let result = [];

    for (let n of nums) {
        if (map.has(n)) {
           map.set(n, 1 + map.get(n));
        }else{
            map.set(n, 1);
        }  
    }

    for(let [n, f] of map){
        if(bucket[f]){
            bucket[f] = bucket[f].add(n);
        }else{
            bucket[f] = new Set().add(n);
        }
    }

    for(let i = bucket.length - 1; i >= 0; i--){
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }

    return result;
};