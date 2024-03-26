function solution(s) {
    let answer = [];
    let sets = s.slice(2, -2).split('},{').sort((a, b) => a.length - b.length);

    sets.forEach((set) => {
        let tuple = set.split(',');
        answer.push(tuple.find((num) => !answer.includes(num)));
    });

    return answer.map((num) => Number(num));
}