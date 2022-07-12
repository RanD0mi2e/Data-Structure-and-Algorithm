import { Queue } from "./object-Queue.js"

export function hotPotato (elemList, num) {
  debugger
  const queue = new Queue()
  const eliminatedList = []

  // 入列
  for (let i = 0; i < elemList.length; i++) {
    queue.enqueue(elemList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminatedList.push(queue.dequeue())
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}
