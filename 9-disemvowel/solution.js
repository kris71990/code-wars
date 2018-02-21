'use strict';

function disemvowel(str) {
  const rx = /[AaEeIiOoUu]/g;
  return str.replace(rx, '');
}

disemvowel('This website is for losers LOL!');
//returns 'Ths wbst s fr lsrs LL!'