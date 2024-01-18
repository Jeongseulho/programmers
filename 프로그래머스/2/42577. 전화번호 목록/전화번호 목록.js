function solution(phoneBook) {
    phoneBook.sort();
    for (let i = 0; i < phoneBook.length - 1; i++) {
        const curNums = phoneBook[i]
        const nextNums = phoneBook[i + 1]
        if (curNums === nextNums.substring(0, curNums.length)) return false;
    }
    return true;
}
