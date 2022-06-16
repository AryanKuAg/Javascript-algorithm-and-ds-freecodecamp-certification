// import Queue from "../Queue/01-queue";
import Stack from "../stack/01-stack";

// Stack + Stack = Queue

class ModernQueue {
    constructor() {
        this.st1 = new Stack()
        this.st2 = new Stack()
    }

    add(x) {
        while(this.st1 !== undefined){
            this.st2.add(this.st1.remove())
        }
        this.st1.add(x)
        while(this.st2 !== undefined){
            this.st1.add(this.st2.remove())
        }
    }

}