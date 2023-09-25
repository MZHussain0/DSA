/**
 * There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.


 */

const largestAltitude = (gain) => {
  let temp = [0];
  let alt = 0;

  for (let i = 0; i < gain.length; i++) {
    alt += gain[i];
    temp.push(alt);
  }
  return Math.max(...temp);
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
