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

    size(){
        let counter = 0;
        let init = this.head;
        while(init !== null){
            init = init.next

            counter++;

        }
        return counter; 
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let lastNode = this.head;
        while(lastNode){
            if(lastNode.next === null){
                break;
            }
            lastNode = lastNode.next;
        }
        return lastNode;
    }
}

// const nodeOne = new Node(5)
// const list = new LinkedList()
// list.head = nodeOne
// console.log(list)
// list.insertFirst(50)
// list.insertFirst(5000)

// console.log(list.size())

const list = new LinkedList()
list.insertFirst('a')
list.insertFirst('b')
list.insertFirst('c')
console.log(list.getLast())