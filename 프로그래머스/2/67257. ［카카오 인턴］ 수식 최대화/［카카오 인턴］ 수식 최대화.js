const solution = (expression) => {
    let ans = 0;
    const allCase = [];
    const permutation = (perm, rests, n) => {
        if(perm.length === n) return allCase.push(perm);
        rests.forEach((ele, idx) => {
            permutation([...perm, ele], rests.filter((_, idx2) => idx2 !== idx), n);
        })
    }
    permutation([], ['-', '+', '*'], 3);
    
const calRes = (priority, nums, signs) => {
    for (let i = 0; i < 3; i++) {
        let signIdx = 0;
        while (signIdx < signs.length) {
            if (signs[signIdx] === priority[i]) {
                switch (signs[signIdx]) {
                    case '+':
                        nums[signIdx] += nums[signIdx + 1];
                        break;
                    case '-':
                        nums[signIdx] -= nums[signIdx + 1];
                        break;
                    case '*':
                        nums[signIdx] *= nums[signIdx + 1];
                        break;
                }
                nums.splice(signIdx + 1, 1);
                signs.splice(signIdx, 1);
            } else signIdx++;
        }
    }
    return Math.abs(Number(nums[0]));
}
    
    const nums = expression.split(/[^0-9]/);
    const signs = expression.split(/[0-9]/).filter(Boolean);
    for(const priority of allCase) {
        const res = calRes(priority, nums.map(Number), [...signs])
        ans = Math.max(res, ans);
    }
    
    return ans;
};