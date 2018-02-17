'use strict';

function capitalize(s){
  let arr = s.split('');
  let alts = [];
  let altCapEven = [];
  let altCapOdd = [];
  for (let i in arr) {
    if (i % 2 === 0) {
      altCapOdd.push(arr[i]);
      altCapEven.push(arr[i].toUpperCase());
    } else {
      altCapEven.push(arr[i]);
      altCapOdd.push(arr[i].toUpperCase());
    }
  }
  alts.push(altCapEven.join(''));
  alts.push(altCapOdd.join(''));
  return alts;
}

capitalize('codewars'); // returns ['CoDeWaRs', 'cOdEwArS']