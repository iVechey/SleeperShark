type Callback<T> = () => Promise<T>;

export class RateLimiter {
    private maxCallsPerMinute: number;
    private queue: Array<() => Promise<void>>;
    private currentCalls: number;
    private resetInterval: number;

    constructor(maxCallsPerMinute: number) {
        this.maxCallsPerMinute = maxCallsPerMinute;
        this.queue = [];
        this.currentCalls = 0;
        this.resetInterval = 60 * 1000; // one minute
        this.start();
    }

    private start(): void {
        setInterval(() => {
            this.currentCalls = 0; // Reset call count every minute
            this.processQueue();
        }, this.resetInterval);
    }

    public enqueue<T>(callback: () => Promise<T>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            // Wrap the callback to ensure it returns a Promise<T>
            const wrappedCallback = async () => {
                try {
                    const result = await callback();
                    resolve(result);
                } catch (error) {
                    reject(error);
                } finally {
                    this.currentCalls--;
                    this.processQueue();
                }
            };

            this.queue.push(wrappedCallback);
            this.processQueue();
        });
    }

    private processQueue(): void {
        if (this.currentCalls < this.maxCallsPerMinute) {
            while (this.queue.length > 0 && this.currentCalls < this.maxCallsPerMinute) {
                const task = this.queue.shift();
                if (task) {
                    this.currentCalls++;
                    task(); // This function must return a Promise<void>
                }
            }
        }
    }
}
