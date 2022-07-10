const _items = Symbol('stackItems')
const _count = Symbol('stackNum')

// 利用Symbol基本类型实现属性私有
class Stack {
  constructor () {
    this[_items] = []
    this[_count] = 0
  }

  push (elem) {
    this[_items][this[_count]] = elem
    this[_count]++
    return this[_count]
  }

  size () {
    return this._count
  }
}
