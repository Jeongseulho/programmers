function solution(arr) {
    const ans = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if (!(arr[i] === ans[ans.length - 1])) {
            ans.push(arr[i]);
        } 
    }
    return ans;
}