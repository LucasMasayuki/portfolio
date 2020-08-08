/* eslint-disable  @typescript-eslint/no-explicit-any */
export default class Node {
    public data: any;

    public next: any;

    public prev: any;

    constructor(data: any, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
