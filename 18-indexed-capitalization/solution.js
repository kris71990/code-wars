'use strict';

function capitalize(s,arr){
  let array = s.split('');
  for (let i in arr) {
    if (arr[i] < array.length) {
      array[arr[i]] = array[arr[i]].toUpperCase();
    }
  }
  return array.join('');
}

capitalize('abcdef',[1,2,5]);
// returns aBCdeF