function solution(priorities, location) {
    const Q = Array.from({length:priorities.length}, (_,i) => i); 
    
    let order = 0;
    while (Q.length) {
        const process = Q.shift();
        const processPriority = priorities[process]
        if (Q.some((process) => priorities[process] > processPriority)) {
            Q.push(process);
        } else {
            order++;
            if (process === location) {
                return order;
            }
        }
            
    }
}