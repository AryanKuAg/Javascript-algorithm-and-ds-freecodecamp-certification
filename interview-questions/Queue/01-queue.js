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


    peek () {
        return this.list[this.list.length - 1]
    }
}

// console.log(typeof new Queue().peek())

module.exports = Queue