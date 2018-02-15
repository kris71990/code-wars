'use strict';

function insertDash(num) {
  let str = num.toString();
  let arr = str.split('');
  let dashIndex = [];

  for (let x = 0; x < str.length; x++) {
    if (str[x] % 2 === 1 && str[x + 1] % 2 === 1) {
      // arr.splice(x + 1, 0, '-')
      dashIndex.push(x);
    }
  }

  for (let i = 0; i < dashIndex.length; i++) {
    arr.splice(dashIndex[i] + 1 + i, 0, '-');
  }

  return arr.join('');
}

const num = 12334573454233;
insertDash(num);
// returns '123-345-7-345423-3'