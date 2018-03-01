'use strict';

function mutateMyStrings(stringOne, stringTwo){
  let results = [stringOne];
  let stringOneArr = stringOne.split('');
  let stringTwoArr = stringTwo.split('');
  for (let i = 0; i < stringOneArr.length; i++) {
    if (stringOneArr[i] !== stringTwoArr[i]) {
      stringOneArr[i] = stringTwoArr[i];
      results.push(stringOneArr.join(''));
    }   
  }
  return results.join('\n') + '\n';
}

mutateMyStrings('bubble gum', 'turtle ham');

// returns
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham