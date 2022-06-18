const Node = require('./node')


class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data){
        let prev = this.head;

        this.head = new Node(data)
        this.head.next = prev;
       
    }
}

const nodeOne = new Node(5)
const list = new LinkedList()
list.head = nodeOne
console.log(list)
list.insertFirst(50)
list.insertFirst(5000)

console.log(list)