import { defaultEquals, IEqualsFunction } from '../util'
import { Node } from './linkedModel/linkedListModel'

export default class LinkedList<T> {
  protected count = 0
  protected head: Node<T> | undefined
  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {
  }

  // 链表添加新元素
  push(element: T) {
    const node = new Node(element)
    let current

    if (this.head == null) {
      // 捕获 undefined 和 null
      this.head = node
    } else {
      current = this.head
      // 从头遍历，找到最后一位元素
      while (current.next != null) {
        current = current.next
      }
      // 在最后一位元素后再加新元素
      current.next = node
    }
    this.count++
  }

  // 获取指定索引位置的元素
  getElementAt(index: number) {
    // 索引小于链表长度
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  // 在指定位置插入元素
  insert(element: T, index: number) {
    // 索引大小必须小于链表长度
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      // 1.在链表头插入元素
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        // 2.在链表中间插入元素
        const previous = this.getElementAt(index - 1)
        // narrow
        if (previous != null) {
          node.next = previous.next
          previous.next = node
        }
      }
      this.count++
      return true
    }
    // 索引大小 > 链表长度
    return false
  }

  // 移除指定索引的元素
  removeAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      // 链表头部去除元素
      if (index === 0) {
        this.head = current?.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous?.next
        previous != null && (previous.next = current?.next)
      }
      this.count--
      return current?.element
    }
    return undefined
  }

  // 返回元素所在索引
  indexOf(element: T) {
    let current = this.head
    for (let i = 0; i < this.size(); i++) {
      if (current != null && this.equalsFn(element, current.element)) {
        return i
      }
      current = current?.next
    }
    return -1
  }

  // 移除元素
  remove(element: T) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.head = undefined
    this.count = 0
  }

  getHead() {
    return this.head
  }

  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
