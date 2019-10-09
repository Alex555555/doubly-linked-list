const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node();

        node.data = data;

        if (this.length === 0) {
            this._head = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
        }
        this._tail = node;
        this.length++;

        return this;
    }

    head() {
    	if(this._head){
    	  return this._head.data
    	} else {
    	  return null;
    	}
    }

    tail() {
    	if(this._tail){
    	  return this._tail.data
    	} else {
    	  return null;
    	}
    }

    at(index) {
        let current = this._head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current.data;
    }

    insertAt(index, data) {
        let node = new Node();
        node.data = data;
        let current = this._head;

        if (index === this.length) {
            this.append(data);
            return this;
        }

        for(let i = 0; i <= index; i++) {
            if (i == index) {
                node.prev = current.prev;
                node.next = current;
                current.prev.next = node;
                current.prev = node;
                this.length++;
            } else {
                current = current.next;
            }
        }
        return this;
    }

    isEmpty() {
      return this.length == 0 ? true : false;
      	
      
      
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let current = this._head;

        for(let i = 0; i <= index; i++) {
            if (this.length === 1 && index === 0) {
                this._head = null;
                this._tail = null;
                this.length = 0;
                return this;
            } else if ( i === index) {
                current.prev.next = current.next;
                current.next.prev = current.prev;
                this.length--;
            } else {
                current = current.next;
            }
        }
        return this;
    }

    reverse() {
        let current= this._head;
        this._head = this._tail;
        this._tail = current;

        for(let i = 0; i < this.length; i++) {
            let buffer = current.next;
            current.next = current.prev;
            current.prev = buffer;
            
            current = current.prev;
        }

        return this;
    }

    indexOf(data) {
        let current = this._head;

        for (let i = 0; i < this.length; i++) {
            if (current.data === data) {
                return i;
            } else {
                current = current.next;
            }
        }

        return -1;
    }
}


module.exports = LinkedList;
