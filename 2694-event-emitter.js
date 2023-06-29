class EventEmitter {
    events = new Map();

    subscribe(event, cb) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        const listeners = this.events.get(event);
        listeners.push(cb);

        return {
            unsubscribe: () => {
                const idx = listeners.indexOf(cb);
                if (idx !== -1) {
                    listeners.splice(idx, 1);
                }
            },
        };
    }

    emit(event, args = []) {
        const listeners = this.events.get(event);
        if (!listeners) return [];

        const results = [];
        for (const listener of listeners) {
            results.push(listener(...args));
        }

        return results;
    }
}


/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */