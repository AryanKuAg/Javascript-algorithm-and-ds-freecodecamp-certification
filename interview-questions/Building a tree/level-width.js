const Node = require('./tree')
// console.log(Node)

function findWidth (data) {
    const counter = [0]
const arr = []

while(arr.length){
    const node  = [data]
    node.push('s')

    while(node.length >= 2){
        const current = node.shift()
        if(current === 's'){
            counter.push(0)
            node.push('s')
        } else{
            counter[counter.length - 1]++;
            node.push(...node.children)
        }

    }
    }


    return counter;
   
}