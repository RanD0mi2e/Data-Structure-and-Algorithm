class Stack {
  constructor () {
    this.item = []
  }

  // add an element
  push (...elem) {
    return this.item.push(...elem)
  }

  // delete an element
  pop () {
    return this.item.pop()
  }

  // check the top element of stack
  peek () {
    return this.item[this.item.length - 1]
  }

  // check whether the stack is empty
  isEmpty () {
    return this.item.length === 0
  }

  // clear all the element of stack
  clear () {
    this.item = []
  }
}
