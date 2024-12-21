export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const node = new Node(item);
        this.length = this.length + 1;

        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }

        if (this.head) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
            return;
        }
    }

    insertAt(item: T, index: number): void {
        // has some border cases to accomplish yet :/
        const node = new Node(item);
        let current = this.head;
        for (let i = 0; i <= index; i++) {
            if (i === index) {
                if (current && current.prev) {
                    this.length = this.length + 1;
                    current.prev.next = node;
                    node.prev = current.prev;
                    current.prev = node;
                    node.next = current;
                }
            }
            current = this.head?.next;
        }
    }

    append(item: T): void {
        const node = new Node(item);
        this.length = this.length + 1;

        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }

        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            return;
        }
    }

    remove(item: T): T | undefined {
        let current = this.head;
        for (let i = 0; i <= this.length; i++) {
            if (item === current?.value) {
                this.removeAt(i);
                return current.value;
            }
        }
        return undefined;
    }

    get(index: number): T | undefined {
        if (!this.head || !this.tail) return undefined;

        if (index === 0) return this.head.value;
        if (index === this.length - 1) return this.tail.value;

        let result = this.head;
        for (let i = 0; i <= index; i++) {
            if (i === index) {
                return result.value;
            }
            if (this.head.next) {
                result = this.head.next;
            } else {
                return undefined;
            }
        }

        return undefined;
    }

    removeAt(index: number): T | undefined {
        if (index >= this.length) return undefined;
        if (!this.head || !this.tail) return undefined;
        this.length = this.length - 1;

        let current = this.head;

        for (let i = 0; i <= index; i++) {
            if (index === 0 && index === this.length) {
                this.head = undefined;
                this.tail = undefined;
                return current.value;
            }

            if (index === 0) {
                this.head = current.next;
                current.next = undefined;
                if (this.head?.prev) {
                    this.head.prev = undefined;
                }
                return current.value;
            }

            if (index === this.length) {
                current = this.tail;
                this.tail = current.prev;
                current.prev = undefined;
                if (this.tail?.next) {
                    this.tail.next = undefined;
                }
                return current.value;
            }

            if (i === index) {
                if (current.prev && current.next) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    current.next = undefined;
                    current.prev = undefined;
                    return current.value;
                }
            }

            if (this.head.next) {
                current = this.head.next;
            }
        }

        return undefined;
    }
}

//////////////////////////////////////////////

class Node<T> {
    public value: T;
    public prev?: Node<T>;
    public next?: Node<T>;

    constructor(node: T) {
        this.value = node;
    }
}
