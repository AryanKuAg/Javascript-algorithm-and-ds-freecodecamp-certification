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
        if(!this.getLast()){
            this.head = brandNewNode;
        }else {
            
            this.getLast().next = brandNewNode;
        }

        // let lastNode = this.head;

        // while(lastNode){
        //     if(!lastNode.next){
        //         break;
        //     }
        //     lastNode = lastNode.next;
        // }
    }

    getAt(index){
        if(index < 0){
            return null;
        }
        let node = this.head;
        for(let i = 1; i<= index ; i++){
            if(!node){
                return null;
            }
            node = node.next;
            
        }
        return node;
    }


    removeAt(index) {
        if(!this.head){
            return null;
        }
    } 

    getMid(){
       // if this.head === null return null
       // varialbe slow and fast point to this.head
       // try and catch, if fast.next.next goes to catch then break the loop and slow is the mid
       // else try have fast assignnd to fast.next.next and slow to next
       // problem 1: one node is going far more too. 
       if(!this.head){
        return null;
       }
       let slow  = this.head
       let fast = this.head
       while(true){
        try{
            fast = fast.next.next
            slow = slow.next;
        }catch(_){
            break;
        }
       }

       return slow;
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
list.insertFirst('d')

console.log(list.getMid())


// continue from lecture 90. I blowed up.

exports.default = {Node: Node, LinkedList: LinkedList}
