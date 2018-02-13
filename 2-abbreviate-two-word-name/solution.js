'use strict';

// Set an empty array of initials, and loop through the array to push the proper
// letters to the array. A space index variable is initialized to 1 and then added to
// the index in the string that is equal to a space, which is the first letter of the
// last name. Initials are then joined together with a period and returned

function abbrevName(name){
  let spaceIndex = 1;
  let initials = [];
  initials.push(name[0].toUpperCase());

  for (let i = 0; i <= name.length; i++) {
    if (name[i] === ' ') {
      spaceIndex += i;
      initials.push(name[spaceIndex].toUpperCase());
    }
  }
  return initials.join('.');
}

abbrevName('Kris Sakarias'); // returns K.S