const Queue = require( "./01-queue")

// console.log(new Queue())

const weave = (queueOne, queueTwo)=> {

    const combinedQueue = new Queue();
    let alter = false;
    while(queueOne.peek() !== undefined || queueTwo.peek() !== undefined){
        // console.log(queueOne.peek(), queueTwo.peek())
        if (alter && queueOne.peek() !== undefined){
            combinedQueue.add(queueOne.remove())
        }else if(!alter && queueTwo.peek() !== undefined){
            

            combinedQueue.add(queueTwo.remove())
        }

        alter = !alter
    }


    return combinedQueue
}

const q1 = new Queue()
q1.add('some')
q1.add('thing')

const q2 = new Queue()
q2.add('any')
q2.add('one')
q2.add('two')
q2.add('three')
q2.add('five')

let counter = 1;
let latestQueue = weave(q1, q2);
// console.log(weave(q1, q2).peek())
while(latestQueue.peek() !== undefined){
    console.log(counter, latestQueue.remove())
    counter++;
}