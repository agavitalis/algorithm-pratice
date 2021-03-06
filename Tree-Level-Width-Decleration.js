// Given a root node of a tree, return an Array
// where each element is the width of the tree at each level

class Node{  
    constructor(data){
        this.data = data;
        this.childre = [];
    }

    add(data){
        this.childre.push(new Node(data));
    }
}


function widthLevel(root){
  const arr = [root, 's'];
  const counters = [0];

  while(arr.length > 1){
    const node = arr.shift();

    if(node == 's'){
        counters.push(0)
        arr.push('s')
    }else{
        arr.push(...node.children)
        counters[counters.length - 1]++;
    }
  }

  return counters;

}