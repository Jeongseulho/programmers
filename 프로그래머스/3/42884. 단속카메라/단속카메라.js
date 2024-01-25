function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    let camPos = routes[0][1];
    let ans = 1;
    
    for (const route of routes) {
        const [start, end] = route;
        if (start <= camPos && camPos <= end) {
            continue;
        }
        camPos = end;
        ans++;
    }
    return ans;
}