'use strict';

function reverse(word){
  let reversed = [];
  for (let i in word) {
    reversed.push(word[word.length - 1 - i]);
  }
  return reversed.join('');
}

reverse('codefellows');
// returns 'swollefedoc'