function solution(n, arr1, arr2) {
    const arr = new Array(n).fill();
    const ans = [];
    for (let i = 0; i < n; i++) {
        const bin = (arr1[i] | arr2[i]).toString(2);
        const row = '0'.repeat(n - bin.length) + bin;
        ans.push(row.replaceAll('0', ' ').replaceAll('1', '#'));
    }
    return ans;
}
