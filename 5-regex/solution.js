'use strict';

function validateUsr(username) {
  let regex = /[a-z0-9_]{4,16}$/g;
  if (username.match(regex) && username.length >= 4 && username.length <= 16) {
    return true;
  } else {
    return false;
  }
}

validateUsr('asdsdfnsjk23');
// returns true