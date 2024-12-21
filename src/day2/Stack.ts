export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        const node = new Node(item);

        this.length = this.length + 1;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.head) return undefined;

        this.length = this.length - 1;

        const value = this.head.value;

        if (this.length === 0) {
            this.head = undefined;
            return value;
        }

        this.head = this.head.prev;

        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

class Node<T> {
    public value: T;
    public prev?: Node<T>;

    constructor(node: T) {
        this.value = node;
    }
}
