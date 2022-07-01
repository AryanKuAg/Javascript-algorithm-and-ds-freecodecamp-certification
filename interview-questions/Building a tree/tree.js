class Node {
  constructor(arg) {
    this.data = arg;
    this.children = [];
   
  }
  add(data) {
    
    this.children.push(new Node(data))
  }

  remove(data) {
    let temp = this.children.filter(e => e.data !== data)
    this.children = temp
  }
}

class Tree {
  constructor() {
    this.root = null; 
  }

  traverseBFS(fn) {
    const arr = [this.root]

    while(arr.length){
      const node =  arr.shift();

      arr.push(...node.children)
      fn(node)
    }
  }

  traverseDFS() {}
}
