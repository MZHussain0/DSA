const binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));

// ==================== Recursion ========================= /

const search = (nums, target) => {
  return recursiveSearch(nums, target, 0, nums.length - 1);
};

function recursiveSearch(nums, target, min, max) {
  let mid = min + Math.floor((max - min) / 2);

  if (max >= min) {
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      return recursiveSearch(nums, target, mid + 1, max);
    } else {
      return recursiveSearch(nums, target, min, mid - 1);
    }
  }
  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
