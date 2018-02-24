'use strict';

function filter_list(l) {
  return l.filter(x => typeof(x) === 'number');
}

filter_list([1,2,'string',3,'example']);
// returns [1,2,3]