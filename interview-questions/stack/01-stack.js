class Stack {
    constructor() {
        this.list = []
    }

    add(x) {
        this.list.unshift(x)
    }

    remove() {
        return this.list.shift()
    }

    peek() {
        return this.list[0]
    }

}

module.exports = Stack