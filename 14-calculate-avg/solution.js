'use strict';

function find_average(array) {
  let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum / array.length;
}

find_average([1,2,3]);
// returns 2