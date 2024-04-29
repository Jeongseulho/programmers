function solution(n, k, cmd) {
    class Node {
        constructor(idx, prev) {
            this.idx = idx;
            this.prev = prev;
            this.next;
        }
    }
    
    let prev = new Node(0);
    let cur;
    
    for(let i = 1; i < n; i++) {
        const newNode = new Node(i, prev);
        prev.next = newNode;
        prev = newNode;
        
        if(i === k) cur = newNode;
       
    }
    
    const delStack = [];
    
    const move = (cnt, dir) => {
        for(let i = 0; i < cnt; i++) {
            if(!cur[dir]) break;
            cur = cur[dir];
        }
    }
    
    const del = () => {
        const prev = cur.prev;
        const next = cur.next;
        if(prev) prev.next = next;
        if(next) next.prev = prev;
        
        delStack.push(cur);
        
        cur = next ? next : prev;
    }
    
    const restore = () => {
        const restoreNode = delStack.pop();
        
        const prev = restoreNode.prev;
        const next = restoreNode.next;
        if(prev) prev.next = restoreNode;
        if(next) next.prev = restoreNode;
    }
    
    cmd.forEach((c) => {
        const [command, cnt] = c.split(' ');
        switch(command) {
            case 'D':
                move(cnt, 'next');
                break;
            case 'U':
                move(cnt, 'prev');
                break;
            case 'C':
                del();
                break;
            case 'Z':
                restore();
                break;
        }
    })
    
    const ans = Array(n).fill("O");
    
    delStack.forEach((node) => {
        ans[node.idx] = "X";
    });
    
    return ans.join('');
}