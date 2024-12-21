export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = new Node(item);
        this.length = this.length + 1;
        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }

        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
            return;
        }
    }

    deque(): T | undefined {
        if (!this.head) return undefined;

        this.length = this.length - 1;

        const value = this.head.value;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = undefined;
        }

        return value;
    }

    peek(): T | undefined {
        if (!this.head) return undefined;

        return this.head.value;
    }
}

class Node<T> {
    public value: T;
    public next?: Node<T>;

    constructor(node: T) {
        this.value = node;
    }
}
