import { defaultEquals, IEqualsFunction } from '../util'
import { DoublyNode, Node } from './linkedModel/linkedListModel'
import LinkedList from './linkedList'

class DoublyLinkedList<T> extends LinkedList<T> {
  protected head: DoublyNode<T> | undefined
  protected tail: DoublyNode<T> | undefined

  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {
    super(equalsFn)
  }

  // 链尾添加元素
  push(element: T) {
    const node = new DoublyNode(element)
    if (this.head == null) {
      // 空链表头、尾指向同一节点
      this.head = node
      this.tail = node
    } else {
      this.tail && (this.tail.next = node)
      node.prev = this.tail
      this.tail = node
    }
    this.count++
  }

  // 插入元素
  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      let current = this.head
      // 链头插入元素
      if (index === 0) {
        if (this.head == null) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          this.head.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        // 链尾插入元素
        current = this.tail
        // 尾元素不能为空
        if (current != null) {
          current.next = node
          node.prev = current
          this.tail = node
        }
      } else {
        // 在链表中插入元素
        const previous = this.getElementAt(index - 1)
        current = previous && previous.next
        if (previous != null) {
          previous.next = node
          node.next = current
          node.prev = previous
          current && (current.prev = node)
        }
      }
      this.count++
      return true
    }
    return false
  }

  // 删除指定索引元素
  override removeAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      // 删除表头元素
      if (index === 0) {
        this.head = this.head?.next
        // 如果只有一个元素
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head && (this.head.prev = undefined)
        }
      } else if (index === this.count - 1) {
        // 删除表尾元素
        current = this.tail
        this.tail = current?.prev
        this.tail && (this.tail.next = undefined)
      } else {
        // 删除表中元素
        current = this.getElementAt(index)
        const previous = current?.prev
        previous && (previous.next = (current && current.next))
        current && current.next && (current.next.prev = previous)
      }
      this.count--
      return current?.element
    }
    return undefined
  }

  override getElementAt(index: number) {
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

  // 链表反转
  reverse() {
    let current = this.head
    while (current) {
      let temp = current.prev
      current.prev = current.next
      current.next = temp
      this.head = current
      current = current.prev
    }
    // 最后链表头head指向原来的链尾
    return this.head
  }

  indexOf(element: T) {
    let current = this.head
    let index = 0
    while (current != null) {
      if (this.equalsFn(element, current.element)) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  clear() {
    super.clear();
    this.tail = undefined;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    while (current != null) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }

  inverseToString() {
    if (this.tail == null) {
      return '';
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    while (previous != null) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev;
    }
    return objString;
  }
}


