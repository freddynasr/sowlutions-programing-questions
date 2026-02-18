class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.node = null;
    this.length = 0;
  }

  print = () => {
    let result = "";
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      result += currentNode.value.toString() + " ";
      currentNode = currentNode.next;
    }
    console.log(result);
  };

  addNode = (number) => {
    if (typeof number !== "number") throw "Invalid Input";

    const newNode = new Node(number);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return true;
  };

  removeNodes = (number) => {
    if (typeof number !== "number") throw "Invalid Input";
    if (!this.head || this.length === 0) throw "Empty List";
    const result = new LinkedList();
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value <= number) {
        result.addNode(currentNode.value);
      }
      currentNode = currentNode.next;
    }
    this.head = result.head;
    this.length = result.length;
    return;
  };
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const LL = new LinkedList();

LL.addNode(1);
LL.addNode(2);
LL.addNode(9);
LL.addNode(16);
LL.addNode(10);
LL.addNode(2);
LL.addNode(7);
LL.addNode(5);

LL.print();

LL.removeNodes(5);

LL.print();
