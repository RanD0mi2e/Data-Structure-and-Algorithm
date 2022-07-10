/**
 * 练习：根据传入的数字转化成2~36进制
 */
import { Stack } from '../object-Stack.js'

export function baseConverter (decNumber, base) {
  const stack = new Stack()
  const digits = '0123456789abcdefghijklmnopqrstuvwxyz'
  let result = ''
  let rem

  if (!(base >= 2 && base <= 36)) {
    return ''
  }

  while (decNumber > 0) {
    rem = decNumber % base
    stack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }

  // debugger
  while (!stack.isEmpty()) {
    result += digits[stack.pop()]
  }
  // console.log(result)
  return result
}

// baseConverter(1000, 16)
