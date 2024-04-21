function solution(relation) {
    const maxI = relation.length - 1;
    const maxJ = relation[0].length - 1;
    const ansList = [];
    
    const isUnique = (props) => {
        const rows = [];
        relation.forEach((row) => {
            const newRow = row.filter((_, prop) => props.includes(prop));
            rows.push(JSON.stringify(newRow));
        })
        return new Set(rows).size === rows.length;
    }
    
    const isSubSet = (a, b) => {
        return b.every((ele) => a.includes(ele));
    }
    
    const combination = (comb, rests, n) => {
        if(comb.length === n) {
            for(const ans of ansList) {
                if(isSubSet(comb, ans)) return;
            }
            if(isUnique(comb)) return ansList.push(comb)
        }
        
        rests.forEach((ele, idx) => {
            combination([...comb, ele], rests.slice(idx + 1), n);
        })
    }
    
    const allProp = Array.from({ length : maxJ + 1}, (_, i) => i);
    for(let r = 1; r <= maxJ + 1; r++) {
        combination([], allProp, r);
    }
    
    return ansList.length;
}