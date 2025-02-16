class CircleQueue {
    constructor(arr) {
        this.queue = arr;
        this.head = 0;
        this.tail = arr.length - 1;
    }
    
    len() {
        return this.queue.length;
    }
    
    get(i) {
        const idx = (this.head + i) % this.len();
        return this.queue[idx];
    }
    
    rotate() {
        this.head = (this.head + 1) % this.len();
        this.tail = (this.tail + 1) % this.len();
    }
}

function solution(s) {
    const circleQueue = new CircleQueue(s);
    
    const isValid = (circleQueue) => {
        const stack = [];
        for(let i = 0; i < circleQueue.len(); i++) {
            const curString = circleQueue.get(i);
            if(['(', '[', '{'].includes(curString)) stack.push(curString);
            else {
                const lastItem = stack.pop();
                if(!lastItem) return false;
                if(lastItem === '(' && curString !== ')') return false;
                if(lastItem === '[' && curString !== ']') return false;
                if(lastItem === '{' && curString !== '}') return false;
            }
        }
        return !stack.length
    }
    
    let validCnt = 0;
    for(let i = 0; i < s.length; i++) {
        if(isValid(circleQueue)) validCnt += 1;
        circleQueue.rotate();
    }
    
    return validCnt;
}