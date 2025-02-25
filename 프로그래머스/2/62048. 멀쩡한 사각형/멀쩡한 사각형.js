function solution(W, H) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    const gcdValue = gcd(W, H);
    return W * H - (W + H - gcdValue);
}
