class Node{
    constructor(data){
        this.data = data
        this.children = [];
    }

    add(data){
        this.children.push(new Node(data))
    }

    remove(data){
        this.children = this.children.filter( node => node.data !== data)
    }
}


class Tree{
    constructor(){
        this.root = null
    }

    //pick the first guy,
    //push its children and then process the node
    traverseBF(fn){
        const arr = [this.root]
        while(arr.length){
            const node  = arr.shift()
            arr.push(...node.children)
            fn(node)
        }
    }

    //pick the first guy
    //unshift its childern and the process the node
    ////the only difference here is push and and unshift
    traverseDF(fn){
        const arr = [this.root]
        while(arr.length){
            const node  = arr.shift()
            arr.unshift(...node.children)
            fn(node)
        }
    }

}

const node = new Node();
const tree = new Tree()
tree.root = node;


////////Given a node, return an array that holds number of childern 
////////each level of the tree
///here we will be using a stopper variable here
function widthLavel(root){

    const arr = [root, 's']
    counters = []
    counter = 0;

    while(arr.length > 1){
        const node = arr.shift();

        if(node == 's'){
            counters.push(counter);
            arr.push('s')
            counter = 0
        }else{
            counter++;
            arr.push(...node.children)
        }
    }

    return counters;
}

///Binary tree validation
function validate(node, max = null, min = null){

    if(max !== null && node.data > max){
        return false
    }

    if(min !== null && node.data < min){
        return false
    }

    if(node.left && !validate(node.left, min, node.data)){
        return false
    }

    if(node.right && !validate(node.right, node.data, max)){
        return false
    }

    return true
}
