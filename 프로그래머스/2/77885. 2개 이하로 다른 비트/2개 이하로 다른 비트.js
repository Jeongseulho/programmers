function solution(numbers) {
    const ans = Array(numbers.length).fill();
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2) {
            const number = numbers[i].toString(2).split('');
            number.unshift('0');
            for(let j = number.length - 1; j > -1; j--) {
                if(number[j] === '0') {
                    number[j] = '1';
                    number[j + 1] = '0';
                    ans[i] = parseInt(number.join(''), 2);
                    break;
                }
            }
        } else {
            ans[i] = numbers[i] + 1;
        }
    }
    return ans;
}