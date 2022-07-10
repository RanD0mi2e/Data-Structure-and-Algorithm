export class Queue {
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  // 入列
  enqueue (elem) {
    this.items[this.count] = elem
    this.count++
  }

  // 出列
  dequeue () {
    if (this.isEmpty()) {  // 队列是否为空
      return undefined
    }

    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]  // 删除对象属性
    this.lowestCount++
    return result
  }

  // 返回队列第一个元素
  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  // 检测非空
  isEmpty () {
    return this.count - this.lowestCount === 0
  }

  // 检测队列长度
  size () {
    return this.count - this.lowestCount
  }

  clear () {
    this.items = {}
    this.lowestCount = 0
    this.count = 0
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

