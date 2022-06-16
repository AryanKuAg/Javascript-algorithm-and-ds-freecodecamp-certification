class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next;
    }
}

const n1 = new Node('hi')
console.log(n1.data)
console.log(n1.next)
const n2 = new Node('There', n1)
console.log(n2.next)