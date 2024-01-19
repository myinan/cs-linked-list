import Node from "./node";

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const newNode = new Node(value);
    this.tailNode.next = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  get size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count += 1;
      node = node.next;
    }
    return count;
  }

  get headNode() {
    return this.head;
  }

  get tailNode() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getNodeAt(index) {
    if (this.head && index === 0) return this.head;
    if (!this.head) return new Error("List is empty.");
    let count = 0;
    let currentNode = this.head.next;
    while (currentNode) {
      count += 1;
      if (index === count) return currentNode;
      currentNode = currentNode.next;
    }
    return new Error(`Node at index ${index} does not exist.`);
  }

  clear() {
    this.head = null;
  }
}

const node1 = new Node(3);
const newList = new LinkedList(node1);

newList.append(5);
newList.prepend(7);
newList.append(10);
console.log(newList.getNodeAt(4));
