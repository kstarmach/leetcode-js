function Node(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    // left=LRU , right=MRU
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        const node = this.cache.get(key);
        this.remove(node);
        this.insert(node);
        return node.val;
    }
    return -1;
};

LRUCache.prototype.remove = function (node) {
    const left = node.prev;
    const right = node.next;
    left.next = right;
    right.prev = left;
}

LRUCache.prototype.insert = function (node) {
    const prev = this.right.prev;
    const next = this.right;
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.remove(this.cache.get(key))
    }
    const node = new Node(key, value);
    this.insert(node);
    this.cache.set(key, node);
    if (this.cache.size > this.capacity) {
        const lru = this.left.next;
        this.cache.delete(lru.key);
        this.remove(lru)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */