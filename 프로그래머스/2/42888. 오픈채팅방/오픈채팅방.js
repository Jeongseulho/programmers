function solution(record) {
    const ans = [];
    const db = {};
    
    record.forEach((history) => {
        const [ action, id, name ] = history.split(' ');
        if (action === 'Enter' || action === 'Change') {
            db[id] = name;
        }
    })
    
    record.forEach((history) => {
        const [ action, id, _ ] = history.split(' ');
        if (action === 'Enter' || action === 'Leave') {
            const curName = db[id];
            const ansStr = `${curName}님이 ${action === 'Enter' ? '들어왔' : '나갔'}습니다.`
            ans.push(ansStr);
        }
    })
    
    return ans;
}