class LinkedList {
    constructor() {
        this.head = null;

    }

    insertFirst(data) {
        if(this.head !== null) this.head = data;
    }
}