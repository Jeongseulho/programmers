function solution(id_list, report, k) {
  // remove duplicate report
  const reportSet = Array.from(new Set(report));
  report2DArr = reportSet.map((ele) => ele.split(' '));

  const reportedCntPerId = id_list.reduce((acc, value) => {
    return { ...acc, [value]: 0 };
  }, {});

  report2DArr.forEach((ele) => reportedCntPerId[ele[1]]++);

  // find id that reported more than k times
  const reportedId = Object.keys(reportedCntPerId).filter(
    (key) => reportedCntPerId[key] >= k,
  );
  const result = id_list.reduce((acc, value) => {
    return { ...acc, [value]: 0 };
  }, {});

  reportedId.forEach((ele) => {
    report2DArr.forEach((ele2) => {
      if (ele2[1] === ele) {
        result[ele2[0]]++;
      }
    });
  });

  return Object.values(result);
}
