// import Queue from "../Queue/01-queue";
const Stack = require("../stack/01-stack");

// Stack + Stack = Queue

class ModernQueue {
  constructor() {
    this.st1 = new Stack();
    this.st2 = new Stack();
  }

  add(x) {
    while (this.st1.peek() !== undefined) {
      this.st2.add(this.st1.remove());
    }
    this.st1.add(x);
    while (this.st2.peek() !== undefined) {
      this.st1.add(this.st2.remove());
    }
  }

  peek() {
    return this.st1.peek();
  }

  remove() {
    return this.st1.remove();
  }
}

const q = new ModernQueue();
q.add(1);
q.add(2);
console.log(q.peek());
console.log(q.remove());
console.log(q.remove());
