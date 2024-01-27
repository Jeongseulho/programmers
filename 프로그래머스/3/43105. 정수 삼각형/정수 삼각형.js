function solution(triangle) {
    for (let i = triangle.length - 2; i > -1; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.max(triangle[i + 1][j + 1] ?? 0, triangle[i + 1][j] ?? 0) 
        }
    }
    return triangle[0][0]
}