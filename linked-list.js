class Node {

    constructor(value, next = null) {
        this.data = value;
        this.next = next;
    }
}


let firstList = new Node(1)
let secondList = new Node(2)
firstList.next = secondList;

//we can choose to access using the class below
class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const node = new Node(data, this.head)
        this.head = node;
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head
    }

    getLast() {
        if (!this.head) {
            return null
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }

            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return null
        }

        this.head = this.head.next;
    }

    removeLast() {

        //if there is no node
        if (!this.head) {
            return null
        }

        //if we have only one node
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next
        }

        previous.next = null;
        return;

    }

    insertLast(data) {
        const lastNode = this.getLast();
        if (last) {
            //there are some existing nodes in our chain
            lastNode.next = new Node(data)
        } else {
            //the chain is empty
            this.head = new Node(data)
        }
    }

    getAt(index) {

        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next
        }

        //node index not found
        return null
    }

    removeAt(index) {
        //if there is no node
        if (!this.head) {
            return null
        }

        if (index === 0) {
            this.head = this.head.next;
            return
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return
        }

        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        //if there is no node
        if (!this.head) {
            this.head = new Node(data)
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;

    }

}
//const nodeItem = new Node(5)
const list = new LinkedList()
list.head = new Node(5)
list.insertFirst(6)