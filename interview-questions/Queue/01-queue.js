class Queue {
    constructor() {
        this.list  = []
    }

    add(daat) {
        this.list.unshift(daat)
    }

    remove() {
        return this.list.pop()
    }
}

let q = new Queue()

q.add('popat')
q.add('lal')
console.log(q.remove())