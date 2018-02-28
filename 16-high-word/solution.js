function high(x){
  const arr = x.split(' ');
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let highWordScore = 0;
  let highWord = '';

  for (let i in arr) {
    let word = arr[i].split('');
    let wordScore = word.reduce((acc, curr) =>
      acc + (letters.indexOf(curr) + 1), 0);

    if (wordScore > highWordScore) {
      highWordScore = wordScore;
      highWord = arr[i];
    }
  }
  return highWord;
}

high('what time are we climbing up the volcano');
// returns 'volcano'

