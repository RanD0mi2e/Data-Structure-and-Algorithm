// 利用weakMap的特性实现属性私有
const items = new WeakMap()

class Stack {
  constructor () {
    items.set(this, [])
  }

  push (elem) {
    const s = items.get(this)
    s.push(elem)
    return s.length
  }

  pop () {
    const s = items.get(this)
    let r = s.pop()
    return r
  }

  checkList () {
    const s = items.get(this)
    console.log(s)
  }
}
