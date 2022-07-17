import { defaultEquals, IEqualsFunction } from '../util'
import { Node } from './linkedModel/linkedListModel'
import LinkedList from './linkedList'

export default class CircularLinkedList<T> extends LinkedList<T> {
  constructor(equalsFn: IEqualsFunction<T> = defaultEquals) {
    super(equalsFn)
  }

  push(element: T) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.getElementAt(this.size() - 1);
      current && (current.next = node)
    }

    node.next = this.head
    this.count++
  }

  insert(element: T, index: number) {
    const node = new Node(element)
    let current = this.head
    if (index >= 0 && index <= this.count) {
      if (index === 0) {
        if (this.head == null) {
          this.head = node
          node.next = this.head
        } else {
          node.next = this.head
          this.head = node
          current = this.getElementAt(this.size() - 1)
          current && (current.next = this.head)
        }
      } else {
        const previous = this.getElementAt(index - 1)
        node.next = previous && previous.next
        previous && (previous.next = node)
      }
      this.count++
      return true
    }
    return false
  }

  removeAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined
        } else {
          const removed = this.head
          current = this.getElementAt(this.size() - 1)
          current && (current.next = removed?.next)
          this.head = removed?.next
          current = removed
        }
      } else if (index === this.count) {
        const previous = this.getElementAt(index - 1)
        current = previous?.next
        previous && (previous.next = this.head)
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous?.next
        previous && (previous.next = current?.next)
      }
      return current?.element
    }
    return undefined
  }
}
