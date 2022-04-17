// //A node with at most two children
// //the values on left is less than that of the parent
// //the children values increases in ascending order

// //Question
// 1) Implement the Node class to create 
// a binary search Tree. The Constructor should initialize values 'data','left' and 'right'

// 2) Implement the 'insert' method for the Node class. Insert should accept an argument 
// DataTransfer, then create and insert a new node at the appropriate location in the Tree

//3) imlement a function which checks if a tree contains an agiven value

//4) Implement the validation of a binanry tree
class Node {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null
    }

    insert(data) {

        if (data < this.data && this.left) {
            this.left.insert(data)
        } else if (data < this.data) {
            this.left = new Node(data)
        } else if (data > this.data && this.right) {
            this.right.insert(data)
        } else if (data > this.data) {
            this.right = new Node(data)
        }

    }

    contains(data) {
        if (this.data === data) {
            return this;
        }

        if (this.data < data && this.right) {
            return this.right.contains(data)
        } else if (this.data > data && this.left) {
            return this.left.contains(data)
        }
        return null;
    }

    validate(node, min = null, max = null){

        if(max !== null && node.data > max){
            return false
        }

        if(min !== null && node.data < min){
            return false
        }
        //transverse to the left
        if(node.left && !this.validate(node.left, min, node.date)){
            return false
        }

        //transverse to the right
        if(node.right && !this.validate(node.right, node.data, max)){
            return false
        }

        return true;
    }
}