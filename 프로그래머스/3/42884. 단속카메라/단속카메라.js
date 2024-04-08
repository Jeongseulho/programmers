function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    let cnt = 1;
    let lastCamPos = routes[0][1];
    
    for (const route of routes) {
        const [start, end] = route;
        if (lastCamPos < start || lastCamPos > end) {
            lastCamPos = end;
            cnt += 1;
        }
    }
    
    return cnt;
}