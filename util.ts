// 比较器
export type ICompareFunction<T> = (a: T, b: T) => number

export type IEqualsFunction<T> = (a: T, b: T) => boolean

export type IDiffFunction<T> = (a: T, b: T) => number

export const DOES_NO_EXIST = -1

export enum Compare {
  LESS_THAN = -1,
  EQUALS = 0,
  BIGGER_THAN = 1
}

// 小于等于
export function lesserEquals<T>(a: T, b: T, compareFn: ICompareFunction<T>) {
  const comp = compareFn(a, b)
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}

// 大于等于
export function biggerEquals<T>(a: T, b: T, compareFn: ICompareFunction<T>) {
  const comp = compareFn(a, b)
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS
}

// 默认比较器
export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.EQUALS
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

// 默认等价器
export function defaultEquals<T>(a: T, b: T): boolean {
  return a === b
}

export function defaultToString(item: any): string {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item
}

export function swap(array: any[], a: number, b: number) {
  // 利用解构赋值实现变量互换
  [array[a], array[b]] = [array[b], array[a]]
}

// 反转比较器
export function reverseCompare<T>(compareFn: ICompareFunction<T>): ICompareFunction<T> {
  return (a, b) => compareFn(b, a)
}

// 默认diff
export function defaultDiff<T>(a: T, b: T): number {
  return Number(a) - Number(b)
}
