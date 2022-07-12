import { DoubleQueue } from './object-Double-queue.js'
export function palindromeChecker (aString) {
  // 1.判断输入字符串是否合法
  if (aString === null || aString === undefined || (aString !== null && aString.length === 0)) return false
  // 2.利用双端队列进行比较
  const dequeue = new DoubleQueue()
  const lowerString = aString.toLocaleLowerCase().split(' ').join('')
  let isEqual = true
  let firstChar, lastChar
  for (let i = 0; i < lowerString.length; i++) {
    dequeue.addBack(lowerString.charAt(i))
  }
  while (dequeue.size() > 1) {
    firstChar = dequeue.removeFront()
    lastChar = dequeue.removeBack()
    // 双端队列中第一个和最后一个数字不一致，说明不是回文数
    if (firstChar !== lastChar) {
      isEqual = false
    }
  }
  return isEqual
}
