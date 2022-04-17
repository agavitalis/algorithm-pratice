class Node{

    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data){
        const node = new Node(data)
        this.children.push(node)
    }

    remove(data){
        this.children = this.children.filter(node =>{
            return node.data !== data;
        })
    }
}

class Tree{

    constructor(){
        this.root = null;
    }

    traverseBF(fn){

        const arr  = [this.root]

        while(arr.length){
            const node = arr.shift()
            //add to the end of the array
            arr.push(...node.children)

            fn(node)
        }

    }

    traverseDF(){
        const arr  = [this.root]

        while(arr.length){
            const node = arr.shift()
            //add to the front of the array
            arr.unshift(...node.children)

            fn(node)
        }
    }
}