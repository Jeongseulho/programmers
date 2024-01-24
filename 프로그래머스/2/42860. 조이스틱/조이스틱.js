function solution(name) {
  let answer = 0;
  let minMove = name.length - 1;

  [...name].forEach((alphabet, idx) => {
    answer += Math.min(alphabet.charCodeAt() - 65, 91 - alphabet.charCodeAt());
    let nextIdx = idx + 1;

    while (nextIdx < name.length && name[nextIdx] === 'A') {
      nextIdx++;
    }
      
    // https://velog.io/@a_in/Programmers-Greedy-Level-2-Joystick-JavaScript
    minMove = Math.min(
      minMove,
      idx * 2 + name.length - nextIdx,
      idx + 2 * (name.length - nextIdx),
    );
  });

  return answer + minMove;
}