/* eslint-disable  @typescript-eslint/no-explicit-any */
import Node from './Node';
import moveTo from './Constants';

export default class CircularDoublyLinkedList {
    private head: any;

    private length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    public add(data: any): void {
        const node = new Node(data);

        if (this.head === null) {
            this.head = node;
            node.next = node;
            node.prev = node;
        } else {
            const tail = this.head.prev;

            tail.next = node;
            node.prev = tail;
            node.next = this.head;
            this.head.prev = node;
        }

        this.length += 1;
    }

    public getElementsOnRange(range: number): any[] {
        const array = [];
        let current = this.head;
        const temp = current.data;
        let index = 0;

        while (current && index! < range) {
            if (temp === current.next.data) {
                array.push(current.data);
                break;
            }

            array.push(current.data);

            current = current.next;
            index += 1;
        }

        return array;
    }

    public moveHead(to: string): any {
        if (to === moveTo.NEXT) {
            this.head = this.head.next;
        } else if (to === moveTo.PREVIOUS) {
            this.head = this.head.prev;
        }
    }

    public getHead() {
        return this.head;
    }
}
