export class DoubleQueue {
  constructor () {
    this.items = {}
    this.lowestCount = 0
    this.count = 0
  }

  // 在队列后端添加新元素
  addBack (elem) {
    this.items[this.count] = elem
    this.count++
  }

  // 在队列前端添加新元素
  addFront (elem) {
    if (this.isEmpty()) {
      this.addBack(elem)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = elem
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = elem
    }
  }

  removeFront () {
    if (this.isEmpty()) {
      return undefined
    }

    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  removeBack () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return result
  }

  peekFront () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  peekBack () {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[this.count - 1]
  }

  isEmpty () {
    return this.count - this.lowestCount === 0
  }

  clear () {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  size () {
    return this.count - this.lowestCount
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}
