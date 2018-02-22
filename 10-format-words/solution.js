'use strict';

function formatWords(words){
  let arr = [];
  if (words !== null) {
    let filtered = words.filter(word => word.length > 0);  
    for (let i = 0; i < filtered.length; i++) {
      arr.push(filtered[i]) 
      if (i < filtered.length - 2) {
        arr.push(', ');
      }
      if (i === filtered.length - 2) {
        arr.push(' and ');
      }
    }
    return arr.join('');
  } else {
    return '';
  }
}

formatWords(['apple', 'banana', 'pear', 'blueberry']);
// returns 'apple, banana, pear and blueberry