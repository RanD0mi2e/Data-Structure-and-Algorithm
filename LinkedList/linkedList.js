"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const linkedListModel_1 = require("./linkedModel/linkedListModel");
class LinkedList {
    constructor(equalsFn = util_1.defaultEquals) {
        this.equalsFn = equalsFn;
        this.count = 0;
    }
    // 链表添加新元素
    push(element) {
        const node = new linkedListModel_1.Node(element);
        let current;
        if (this.head == null) {
            // 捕获 undefined 和 null
            this.head = node;
        }
        else {
            current = this.head;
            // 从头遍历，找到最后一位元素
            while (current.next != null) {
                current = current.next;
            }
            // 在最后一位元素后再加新元素
            current.next = node;
        }
        this.count++;
    }
    // 获取指定索引位置的元素
    getElementAt(index) {
        // 索引小于链表长度
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    // 在指定位置插入元素
    insert(element, index) {
        // 索引大小必须小于链表长度
        if (index >= 0 && index <= this.count) {
            const node = new linkedListModel_1.Node(element);
            // 1.在链表头插入元素
            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            }
            else {
                // 2.在链表中间插入元素
                const previous = this.getElementAt(index - 1);
                // narrow
                if (previous != null) {
                    node.next = previous.next;
                    previous.next = node;
                }
            }
            this.count++;
            return true;
        }
        // 索引大小 > 链表长度
        return false;
    }
    // 移除指定索引的元素
    removeAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            // 链表头部去除元素
            if (index === 0) {
                this.head = current === null || current === void 0 ? void 0 : current.next;
            }
            else {
                const previous = this.getElementAt(index - 1);
                current = previous === null || previous === void 0 ? void 0 : previous.next;
                previous != null && (previous.next = current === null || current === void 0 ? void 0 : current.next);
            }
            this.count--;
            return current === null || current === void 0 ? void 0 : current.element;
        }
        return undefined;
    }
    // 返回元素所在索引
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.size(); i++) {
            if (current != null && this.equalsFn(element, current.element)) {
                return i;
            }
            current = current === null || current === void 0 ? void 0 : current.next;
        }
        return -1;
    }
    // 移除元素
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        this.head = undefined;
        this.count = 0;
    }
    getHead() {
        return this.head;
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
exports.default = LinkedList;
