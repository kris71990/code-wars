'use strict';

function validatePIN (pin) {
  let rx = /^([0-9]{4}|[0-9]{6})?$/g;
  if (pin.match(rx)) {
    return true;
  } else {
    return false;
  }
}

validatePIN('12345');
// returns false