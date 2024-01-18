function solution(arr)
{
    let prev = arr.shift();
    const ans = [prev];
    for (const num of arr) {
        if (ans[ans.length - 1] !== num) ans.push(num);
    }
    return ans
}