'use strict';

function cubeOdd(arr) {
  let nums = arr.filter(x => typeof(x) === 'number');
  if (nums.length !== arr.length) return undefined;
  let cubed = nums.map(x => x * x * x);
  let odds = cubed.filter(x => x % 2 === 1 || x % 2 === -1);

  if (odds.length === 0) {
    return 0;
  } else {
    return odds.reduce((a,b) => a + b);
  }
}

cubeOdd([1,2,3,4,5,-5]);
// returns 10