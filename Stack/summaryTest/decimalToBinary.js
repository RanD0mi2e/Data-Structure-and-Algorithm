/**
 * 栈的练习：十进制转换二进制
 * 思路：多次递归取余数进栈，收集出栈的顺序即为所需要的二进制数
 */
import { Stack } from '../object-Stack.js'

function DecimalToBinary (number, divisor) {
  const items = new Stack()
  let rem
  let result = ''
  while (number > 0) {
    rem = number % divisor
    items.push(rem)
    number = Math.floor(number / divisor)
  }

  while (!items.isEmpty()) {
    result += items.pop().toString()
  }
  console.log(result)
  return result
}

DecimalToBinary(2333, 2)
