function solution(sizes) {
    const resizes = sizes.map((size) => size.sort((a, b) => a - b));
    let maxW = 0;
    let maxH = 0;
    
    for(const resize of resizes) {
        const w = resize[0];
        const h = resize[1];
        maxW = Math.max(maxW, w);
        maxH = Math.max(maxH, h);
    }
    return maxW * maxH
}
