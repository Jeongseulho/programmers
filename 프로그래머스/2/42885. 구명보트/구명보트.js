function solution(people, limit) {
    people.sort((a, b) => a - b);
    let l = 0;
    let r = people.length - 1;
    let ans = 0;
    while(l <= r) {
        const weightSum = people[l] + people[r];
        if(weightSum > limit) {
            r--;
            ans++;
        } else {
            l++;
            r--;
            ans++;
        }
    }
    return ans;
}