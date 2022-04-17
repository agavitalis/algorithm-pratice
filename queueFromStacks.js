//Implement a Queue using Two Stacks
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

class Queue{

    constructor(){
        this.firstStack = new Stack();
        this.secondStack = new Stack();
    }

    add(data){
        this.firstStack.push(data);
    }

    remove(){
        while(this.firstStack.peek()){
            this.secondStack.push(this.firstStack.pop());
        }

        const desiredResult = this.secondStack.pop();

        while(this.secondStack.peek()){
            this.firstStack.push(this.secondStack.pop());
        }

        return desiredResult;
    }

    peek(){
        while(this.firstStack.peek()){
            this.secondStack.push(this.firstStack.pop());
        }

        const desiredResult = this.secondStack.peek();

        while(this.secondStack.peek()){
            this.firstStack.push(this.secondStack.pop());
        }

        return desiredResult;
    }


}