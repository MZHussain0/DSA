/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (const interval of intervals) {
    const last = result[result.length - 1];
    if (last[1] >= interval[0]) {
      last[1] = Math.max(last[1], interval[1]);
    } else {
      result.push(interval);
    }
  }
  return result;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
