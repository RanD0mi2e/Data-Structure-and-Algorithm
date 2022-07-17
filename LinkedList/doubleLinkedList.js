"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const linkedListModel_1 = require("./linkedModel/linkedListModel");
const linkedList_1 = __importDefault(require("./linkedList"));
class DoublyLinkedList extends linkedList_1.default {
    constructor(equalsFn = util_1.defaultEquals) {
        super(equalsFn);
        this.equalsFn = equalsFn;
    }
    // 链尾添加元素
    push(element) {
        const node = new linkedListModel_1.DoublyNode(element);
        if (this.head == null) {
            // 空链表头、尾指向同一节点
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail && (this.tail.next = node);
            node.prev = this.tail;
            this.tail = node;
        }
        this.count++;
    }
    // 插入元素
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new linkedListModel_1.DoublyNode(element);
            let current = this.head;
            // 链头插入元素
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                }
                else {
                    node.next = this.head;
                    this.head.prev = node;
                    this.head = node;
                }
            }
            else if (index === this.count) {
                // 链尾插入元素
                current = this.tail;
                // 尾元素不能为空
                if (current != null) {
                    current.next = node;
                    node.prev = current;
                    this.tail = node;
                }
            }
            else {
                // 在链表中插入元素
                const previous = this.getElementAt(index - 1);
                current = previous && previous.next;
                if (previous != null) {
                    previous.next = node;
                    node.next = current;
                    node.prev = previous;
                    current && (current.prev = node);
                }
            }
            this.count++;
            return true;
        }
        return false;
    }
    // 删除指定索引元素
    removeAt(index) {
        var _a;
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            // 删除表头元素
            if (index === 0) {
                this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
                // 如果只有一个元素
                if (this.count === 1) {
                    this.tail = undefined;
                }
                else {
                    this.head && (this.head.prev = undefined);
                }
            }
            else if (index === this.count - 1) {
                // 删除表尾元素
                current = this.tail;
                this.tail = current === null || current === void 0 ? void 0 : current.prev;
                this.tail && (this.tail.next = undefined);
            }
            else {
                // 删除表中元素
                current = this.getElementAt(index);
                const previous = current === null || current === void 0 ? void 0 : current.prev;
                previous && (previous.next = (current && current.next));
                current && current.next && (current.next.prev = previous);
            }
            this.count--;
            return current === null || current === void 0 ? void 0 : current.element;
        }
        return undefined;
    }
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
}
