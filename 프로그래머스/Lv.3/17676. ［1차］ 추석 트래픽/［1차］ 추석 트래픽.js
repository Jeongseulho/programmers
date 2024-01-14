function solution(lines) {
  var answer = 0;
  let times =[];

  lines.map(str => str.split(' ')).forEach(e =>{
    const hour = Number(e[1].split(':')[0]) * 3600 * 1000; // 시간을 밀리초로 변경
    const minute = Number(e[1].split(':')[1]) * 60 * 1000; // 분을 밀리초로 변경
    const second = Number(e[1].split(':')[2]) * 1000;      // 초를 밀리초로 변경

    let end = hour + minute + second; // 끝시간 
    let pass = Number(e[2].slice(0,-1)) * 1000; // 처리시간을 밀리초로 변경
    let start = end - pass +1; // 처리시간은 시작시간과 끝시간을 포함하므로 +1 추가

    times.push(['START', start]);
    times.push(['END', end+1000]); // 1초동안 최대처리량을 알기위해 1000ms 추가

  });

  // 시간을 오름차순으로 나열
  times.sort((a,b) => {
    return a[1] - b[1] < 0 ? -1 : 1;
  })

  // START일때 카운트 +1 , END일때 카운트된 최대처리량 확인 후 카운트 -1
  let count = 0;
  times.forEach(e => {
    e[0] === 'START' ? count++ : (
      answer = answer > count ? answer : count,
      count--
    )
  })

  return answer;
}