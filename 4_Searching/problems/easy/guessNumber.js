/**
 * We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.
 */

function guessNumber(n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    let middle = Math.floor(low + (low + high) / 2);
    let guess = 0;
    if (guess == 0) {
      return middle;
    } else if (guess < 0) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
}

console.log(guessNumber(10));
