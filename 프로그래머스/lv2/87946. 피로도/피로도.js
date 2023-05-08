function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

function solution(k, dungeons) {
  const totalDungeonsCnt = dungeons.length;
  const numList = new Array(totalDungeonsCnt).fill(0).map((_, idx) => idx);
  const orderCaseList = permutation(numList, totalDungeonsCnt);
  let maxCnt = 0;

  for (orderCase of orderCaseList) {
    let myLife = k;
    let cnt = 0;
    for (order of orderCase) {
      if (dungeons[order][0] <= myLife) {
        myLife -= dungeons[order][1];
        cnt++;
        if (maxCnt < cnt) {
          maxCnt = cnt;
        }
      }
    }
  }

  return maxCnt;
}

