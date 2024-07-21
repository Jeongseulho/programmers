function solution(priorities, location) {
    const queue = priorities.map((priorty, idx) => ({loc : idx , priorty}));
    let order = 0;
    
    while(queue.length) {
        const process = queue.shift();
        if(queue.some(({_, priorty}) => priorty > process.priorty)) queue.push(process);
        else {
            order += 1;
            if(process.loc === location) return order;
        }
    }
}