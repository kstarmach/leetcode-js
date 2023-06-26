var TimeLimitedCache = function () {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    if (this.cache.has(key) && this.cache.get(key).expiration > Date.now()) {
        this.cache.set(key, { value, expiration: Date.now() + duration });
        return true;
    } else {
        this.cache.set(key, { value, expiration: Date.now() + duration });
        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        const item = this.cache.get(key);
        if (item.expiration > Date.now()) {
            return item.value;
        }
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let count = 0;
    for (let item of this.cache.values()) {
        if (item.expiration > Date.now()) {
            count++;
        }
    }
    return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */