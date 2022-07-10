export class Stack {
  constructor () {
    this._count = 0
    this._items = {}
  }

  push (elem) {
    this._items[this._count] = elem
    this._count++
  }

  size () {
    return this._count
  }

  isEmpty () {
    return this._count === 0
  }

  pop () {
    if (this.isEmpty()) {
      return undefined
    }
    this._count--
    const result = this._items[this._count]
    delete this._items[this._count]
    return result
  }

  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this._items[this._count - 1]
  }

  clear () {
    // method 1: reset the value of object(change reference)
    this._count = 0
    this._items = {}
    // method 2: set a loop to pop up all element
    while (!this.isEmpty()) {
      this.pop()
    }
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this._items[0]}`
    for (let i = 1; i < this._count; i++) {
      objString = `${objString},${this._items[i]}`
    }
    return objString
  }
}

