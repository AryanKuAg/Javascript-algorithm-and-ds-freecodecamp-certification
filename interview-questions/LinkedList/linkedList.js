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

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        let node = this.head
        if(!node){
            return; // for safety purposes
        }
        while(node){
            if(!node.next.next){
                break;
            }
            node = node.next;
        }
        node.next = null;
    }

    insertLast(data) {
        const brandNewNode = new Node(data)

        let lastNode = this.head;

        while(lastNode){
            if(!lastNode.next){
                break;
            }
            lastNode = lastNode.next;
        }
        lastNode.next = brandNewNode;
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
list.insertLast('aryan agrawal')
console.log(list.getLast())