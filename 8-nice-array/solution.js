'use strict';

function isNice(arr){
  let arrBool = [];
  for (let i in arr) {
    if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
      arrBool.push(true);
    } else {
      arrBool.push(false);
    }
  }
  if (arrBool.includes(false) || arrBool.length === 0) {
    return false;
  } else {
    return true;
  }
}

isNice([2,10,9,3]);
// returns true