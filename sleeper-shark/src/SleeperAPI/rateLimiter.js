class RateLimiter {
    constructor(maxCallsPerMinute) {
        this.maxCallsPerMinute = maxCallsPerMinute;
        this.queue = [];
        this.currentCalls = 0;
        this.resetInterval = 60 * 1000; //one minute
        this.start();
    }

    start() {
        setInterval(() => {
            this.currentCalls = 0; // Reset call count every minute
            this.processQueue();
        }, this.resetInterval);
    }

    enqueue(callback) {
        return new Promise((resolve, reject) => {
            this.queue.push(() => {
                callback()
                    .then(resolve)
                    .catch(reject);
            });
            this.processQueue();
        });
    }

    processQueue() {
        if (this.currentCalls < this.maxCallsPerMinute) {
            while (this.queue.length > 0 && this.currentCalls < this.maxCallsPerMinute) {
                const task = this.queue.shift();
                task();
                this.currentCalls++;
            }
        }
    }
}
