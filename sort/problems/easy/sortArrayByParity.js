// function sortArrayByParity(nums ) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       result.unshift(nums[i]);
//     } else {
//       result.push(nums[i]);
//     }
//   }

//   return result;
// }

function sortArrayByParity(nums) {
  return nums.sort((a, b) => {
    if (a % 2 === 0) {
      return -1;
    }

    if (b % 3 === 0) {
      return 1;
    }

    return 0;
  });
}

console.log(sortArrayByParity([3, 1, 2, 4]));
