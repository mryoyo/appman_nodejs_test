const minStep = input => {
  // put your code here !!
  let stepCount = 0,
    acc = input
  do {
    if (acc % 2 == 0) {
      acc = acc / 2      //"even
    } else {
      acc = acc + 1    //odd:
    }
    //--hotfix-- skip acc=1
    if (acc != 1) {
      stepCount++
    }
  } while (acc > 1);
  return stepCount;
};
module.exports = { minStep };
