"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultDiff = exports.reverseCompare = exports.swap = exports.defaultToString = exports.defaultEquals = exports.defaultCompare = exports.biggerEquals = exports.lesserEquals = exports.Compare = exports.DOES_NO_EXIST = void 0;
exports.DOES_NO_EXIST = -1;
var Compare;
(function (Compare) {
    Compare[Compare["LESS_THAN"] = -1] = "LESS_THAN";
    Compare[Compare["EQUALS"] = 0] = "EQUALS";
    Compare[Compare["BIGGER_THAN"] = 1] = "BIGGER_THAN";
})(Compare = exports.Compare || (exports.Compare = {}));
// 小于等于
function lesserEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}
exports.lesserEquals = lesserEquals;
// 大于等于
function biggerEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}
exports.biggerEquals = biggerEquals;
// 默认比较器
function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
exports.defaultCompare = defaultCompare;
// 默认等价器
function defaultEquals(a, b) {
    return a === b;
}
exports.defaultEquals = defaultEquals;
function defaultToString(item) {
    if (item === null) {
        return 'NULL';
    }
    else if (item === undefined) {
        return 'UNDEFINED';
    }
    else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item;
}
exports.defaultToString = defaultToString;
function swap(array, a, b) {
    // 利用解构赋值实现变量互换
    [array[a], array[b]] = [array[b], array[a]];
}
exports.swap = swap;
// 反转比较器
function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
}
exports.reverseCompare = reverseCompare;
// 默认diff
function defaultDiff(a, b) {
    return Number(a) - Number(b);
}
exports.defaultDiff = defaultDiff;
