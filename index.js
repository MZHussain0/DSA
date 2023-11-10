// ===============================SEARCHING PROBLEMS============================= //

// =========================  Square root of a number ====================== //
const sqrt = (x) => {
  if (x <= 2) return x;

  let start = 1;
  let end = Math.floor(x / 2);
  let result = 0;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    mid;

    if (mid * mid === x) return mid;
    if (mid * mid < x) {
      start = mid + 1;
      result = start;
    } else {
      end = mid - 1;
      result = end;
    }
  }
  return result;
};
// console.log(sqrt(8));

// =========================  Guess Game ====================== //
function pick(num, pick = 6) {
  if (num === pick) return 0;
  if (num > pick) return -1;
  if (num < pick) return 1;
}
const guessGame = (n) => {
  let start = 1;
  let end = n;
  let result = 0;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (pick(mid) === 0) return mid;
    if (pick(mid) === 1) {
      start = mid + 1;
      result = start;
    } else {
      end = mid - 1;
      result = end;
    }
    return result;
  }
};

// console.log(guessGame(10));

// =========================  First Bad Version ====================== //
function isBadVersion(version) {
  if (version >= 8) return true;
}

const firstBadVersion = (n) => {
  let start = 0;
  let end = n;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    mid;
    if (isBadVersion(mid)) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};
// console.log(firstBadVersion(31));

// =========================  Two Sum ====================== //
const twoSum = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let sum = arr[start] + arr[end];
    sum;
    if (sum === target) return [start, end];
    if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
};
// console.log(twoSum([2, 7, 11, 15], 18));

// =========================  Valid Perfect square ====================== //

const isPerfectSquare = (num) => {
  if (num === 1) return true;
  let start = 0;
  let end = Math.floor(num / 2);

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid === num) return true;
    if (mid * mid < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};
// console.log(isPerfectSquare(9));

// =========================  Find Smallest Letter Greater Than Target ====================== //

const nextGreatestLetter = (letters, target) => {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (letters[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return letters[start % letters.length];
};
// console.log(nextGreatestLetter(["x", "x", "y", "y"], "a"));

// =========================  Kth Missing Positive Number ====================== //
const kthMissingNumber = (arr, k) => {
  let missingCount = 0;
  let currentNumber = 1;
  let i = 0;
  while (missingCount < k) {
    if (arr[i] === currentNumber) {
      i++;
      currentNumber++;
    } else {
      missingCount++;
      currentNumber++;
    }
  }
  return currentNumber - 1;
};
// console.log(kthMissingNumber([2, 3, 4, 7, 11], 1));

// =========================  Search Insert Position ====================== //
const searchInsertPosition = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    mid;
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};
// console.log(searchInsertPosition([1, 3, 5, 6], 5));
// console.log(searchInsertPosition([1, 3, 5, 6], 7));

// =========================  Peak Index in a Mountain Array ====================== //
const peakIndex = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[start] > nums[end]) {
      end--;
    } else {
      start++;
    }
  }
  return end;
};
// console.log(peakIndex([0, 10, 11, 5, 0]));

// =========================  Count Negative Numbers in sorted matrix ====================== //
const countNegatives = (grid) => {
  let rows = grid.length;
  let cols = grid[0].length;
  let count = 0;
  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    if (grid[row][col] < 0) {
      count += rows - row;
      col--;
    } else {
      row++;
    }
  }
  return count;
};
// console.log(
//   countNegatives([
//     [4, 3, 2, -1],
//     [3, 2, 1, -1],
//     [1, 1, -1, -2],
//     [-1, -1, -2, -3],
//   ])
// );

// =========================  Intersection of Arrays 2 ====================== //
const intersection = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  nums1;
  nums2;

  let result = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    if (nums1[pointer1] === nums2[pointer2]) {
      result.push(nums1[pointer1]);
      pointer1++;
      pointer2++;
    } else if (nums1[pointer1] < nums2[pointer2]) {
      pointer1++;
    } else {
      pointer2++;
    }
  }
  return result;
};
// console.log(intersection([4, 9, 5, 8, 4], [9, 4, 9]));

// =========================  Check if N and its double exits ====================== //
const isExists = (nums) => {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num / 2) || set.has(num * 2)) return true;
    else set.add(num);
  }
  return false;
};

// console.log(isExists([10, 2, 4, 3]));

// *********************** SORTING ********************** //

// ============ Merge sorted arrays ================ //
const merge = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }

  return nums1;
};
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// ======================== Majority Element ========================= /
const majorityElement = (nums) => {
  let count = 0;
  let ans = 0;
  for (const num of nums) {
    if (count === 0) {
      ans = num;
    }

    num === ans ? count++ : count--;
  }
  return ans;
};
// console.log(majorityElement([2, 1, 1, 1, 1, 1, 2, 2]));

// ======================== Contains duplicates ========================= /
const duplicates = (nums) => {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    console.log(nums[left], nums[right]);
    console.log([left, right]);
    if (nums[left] === nums[right]) {
      return true;
    }
    left++;
    right++;
  }
  return false;
};
// console.log(duplicates([1, 4, 3, 2, 5, 6, 6, 7, 8]));

// =============== Intersection of Arrays (unique nums inresult) ================== //
const intersectionof2 = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  set1;
  set2;
  const result = [];

  for (const num of set2) {
    if (set1.has(num)) {
      result.push(num);
    }
  }
  return result;
};
// console.log(intersectionof2([4, 9, 5], [9, 4, 9, 8, 4]));

// ============ Intersection of Arrys 2 (all nums in result) ================== //
const intersectionOfArrays = (nums1, nums2) => {
  const map = new Map();
  const result = [];
  for (const num of nums1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return result;
};
// console.log(intersectionOfArrays([4, 9, 5], [9, 4, 9, 8, 4]));

// ======================== Max Product of three numbers ========================= /
const maxProduct = (nums) => {
  nums.sort();
  nums;
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  );
};
// console.log(maxProduct([1, 2, 3, 4, -5]));

// ================ even numbers at the beginning ================= //
const parity = (nums) => {
  const result = [];
  for (const num of nums) {
    if (num % 2 === 0) result.push(num);
  }
  for (const num of nums) {
    if (num % 2 === 1) result.push(num);
  }
  return result;
};
// console.log(parity([1, 4, 5, 9, 21, 96]));

// ================= sort by parity 2 ========================== //

const parity2 = (nums) => {
  let even = [];
  let odd = [];

  for (let num of nums) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result.push(even.pop());
    } else {
      result.push(odd.pop());
    }
  }

  return result;
};
// console.log(parity2([4, 2, 5, 7]));

// ============= Height Checker ================ //
// *********** NOT CONFIDENT
const heightChecker = (nums) => {
  const frequency = new Array(10).fill(0);
  // Initialize an array to store the frequency of each height

  // Count the frequency of each height in the nums array
  for (let i = 0; i < nums.length; i++) {
    frequency[nums[i]]++;
  }
  frequency;

  let result = 0;
  let currentHeight = 0;

  // Iterate through the nums array and compare each height with the expected order
  for (let i = 0; i < nums.length; i++) {
    while (frequency[currentHeight] === 0) {
      currentHeight++; // Find the next non-zero height
      currentHeight;
    }
    currentHeight;

    if (nums[i] !== currentHeight) {
      result++; // Increment result if the height is not in the expected order
    }

    frequency[currentHeight]--; // Decrement the frequency of the current height
  }

  return result;
};
// console.log(heightChecker([1, 1, 4, 2, 1, 3]));

// ============ Relative sort array ================ //
const relativeSort = (arr1, arr2) => {
  const frequencyMap = new Map();

  for (const num of arr1) {
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
      frequencyMap.set(num, 1);
    }
  }
  frequencyMap;

  const result = [];

  for (const num of arr2) {
    if (frequencyMap.has(num)) {
      const frequency = frequencyMap.get(num);
      frequency;
      result.push(...Array(frequency).fill(num));
      frequencyMap.delete(num);
    }
  }
  const remainingElements = [...frequencyMap.keys()].sort((a, b) => a - b);

  for (const num of remainingElements) {
    const frequency = frequencyMap.get(num);
    result.push(...Array(frequencyMap).fill(num));
  }
  return result;
};
// console.log(relativeSort([3, 1, 3, 4, 6, 7, 9, 19], [1, 4, 3, 9, 6]));

const relativeSortArr = (arr1, arr2) => {
  const hasmap = new Map();

  for (let i = 0; i < arr2.length; i++) {
    hasmap.set(arr2[i], i);
  }
  hasmap;
  return arr1.sort(
    (a, b) =>
      (!hasmap.has(a) ? arr1.length + a : hasmap.get(a)) -
      (!hasmap.has(b) ? arr1.length + b : hasmap.get(b))
  );
};
// console.log(relativeSortArr([3, 1, 3, 4, 6, 7, 9, 19], [1, 4, 3, 9, 6]));

// ========== Minimum absolute difference ========== //
const minAbsDifference = (nums) => {
  nums.sort((a, b) => a - b);
  let minDiff = Number.MAX_SAFE_INTEGER;
  const result = [];
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (Math.abs(nums[i] - nums[i - 1]) === minDiff) {
      result.push([nums[i - 1], nums[i]]);
    }
  }
  return result;
};
// console.log(minAbsDifference([4, 2, 1, 3]));

const minAbsDifference2 = (arr) => {
  let minAblosute = Infinity;
  let output = [];

  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    const minus = arr[i + 1] - arr[i];
    if (minus < minAblosute) {
      minAblosute = minus;
      output = [[arr[i], arr[i + 1]]];
    } else if (minus === minAblosute) {
      output.push([arr[i], arr[i + 1]]);
    }
  }

  return output;
};
// console.log(minAbsDifference2([4, 2, 1, 3]));

// =========== Rank Transform Array =========== //
const rankArray = (nums) => {
  const map = new Map();
  let arr = [...nums];
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      count++;
      map.set(arr[i], count);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = map.get(nums[i]);
  }
  return nums;
};
// console.log(rankArray([40, 39, 14, 37]));

// =================== Number smaller than then current number ================= //
const smallerThanCurrent = (nums) => {
  const sortedArr = [...nums].sort();
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(sortedArr[i])) {
      map.set(sortedArr[i], i);
    }
  }
  return nums.map((num) => map.get(num));
};
// console.log(smallerThanCurrent([6, 5, 4, 8]));

// =================== Max product of 2 elements ================= //
const maxPro = (nums) => {
  const [max1, max2] = nums.sort((a, b) => b - a);
  return (max1 - 1) * (max2 - 1);
};
// console.log(maxPro([1, 5, 4, 5]));

// ================= avarage salary excluding max and min ================ //
const maxSalary = (nums) => {
  let total = 0;
  let max = -Infinity;
  let min = Infinity;

  for (const num of nums) {
    total += num;
    if (max < num) max = num;
    if (min > num) min = num;
  }
  return (total - max - min) / (nums.length - 2);
};
// console.log(maxSalary([1000, 15000, 8000, 12000]));

// ============= Arithmatic progression ============= //
const arithmaticProgression = (nums) => {
  nums.sort((a, b) => a - b);
  common_diff = nums[1] - nums[0];
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] !== common_diff) {
      return false;
    }
  }
  return true;
};
// console.log(
//   arithmaticProgression([
//     13, 12, -12, 9, 9, 16, 7, -10, -20, 0, 18, -1, -20, -10, -8, 15, 15, 16, 2,
//     15,
//   ])
// );

//  =============== Sort by increasing frequency ================ //
const sortbyFrequency = (nums) => {
  const frequency = new Map();
  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }
  return nums.sort((a, b) => frequency.get(a) - frequency.get(b) || b - a);
};
// console.log(sortbyFrequency([1, 1, 2, 2, 2, 3]));

// ================= Special Array ========================== //
const specialArray = (nums) => {
  const freq = new Array(11).fill(0);
  for (const num of nums) {
    freq[num]++;
  }
  let count = 0;
  for (let i = 10; i >= 0; i--) {
    count += freq[i];
    if (i === count) return i;
  }
  return -1;
};

// console.log(specialArray([3, 5]));

// ==================== set Mismatch ============== //
const setMismatch = (nums) => {
  const result = [];
  const map = new Map();
  let maxValue = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map.has(num)) result.push(num);
    map.set(num, i);
    maxValue = Math.max(maxValue, num);
  }
  map;
  maxValue;

  for (let i = 1; i <= maxValue + 1; i++) {
    if (!map.has(i)) {
      result.push(i);
      break;
    }
  }
  return result;
};
// console.log(setMismatch([1, 2, 2, 4]));
