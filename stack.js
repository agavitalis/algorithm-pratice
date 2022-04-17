//FILO first in last out OR Last in First out
class Stack {
    constructor() {
        this.stackArray = [];
    }

    push(data) {
        this.stackArray.push(data)
    }

    pop() {
        return this.stackArray.pop()
    }

    peek() {
        return this.stackArray[this.stackArray.length - 1]
    }
}