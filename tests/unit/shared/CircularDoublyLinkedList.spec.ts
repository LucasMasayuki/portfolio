import NodeEntity from '@/models/NodeEntity';
import CircularDoublyLinkedList from '@/shared/CircularDoublyLinkedList';
import Constants from '@/shared/Constants';

const circularDoublyLinkedList = new CircularDoublyLinkedList();

const data: NodeEntity = {
    cssClass: 'test',
    clickCallback: () => 'testing',
    icon: ['fas', 'home'],
    key: 0,
};

describe('CircularDoublyLinkedList', () => {
    describe('when add first node', () => {
        it('should node be the head of list', () => {
            circularDoublyLinkedList.add(data);
            const head = circularDoublyLinkedList.getHead();

            expect(head).not.toBeNull();
            expect(head.data).toEqual(data);
        });
    });

    describe('when get nodes on range', () => {
        it('should return the array of elements on the range', () => {
            const node = circularDoublyLinkedList.getElementsOnRange(1);

            expect(node).not.toBeNull();
            expect(node[0]).toEqual(data);
        });
    });

    describe('when move head', () => {
        it('should move to previus', () => {
            circularDoublyLinkedList.moveHead(Constants.PREVIOUS);
            const head = circularDoublyLinkedList.getHead();

            expect(head).not.toBeNull();
            expect(head.data).toEqual(data);
        });
    });
});
