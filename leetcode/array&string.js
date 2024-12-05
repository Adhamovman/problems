// intervew questions 1

// var merge = function (nums1, m, nums2, n) {
//   let i1 = m - 1;
//   let i2 = n - 1;
//   let i = m + n - 1;

//   for (i; i >= 0; i--) {
//     if (i2 >= 0) {
//       // avoids undefined values
//       if (i1 >= 0 && nums1[i1] > nums2[i2]) {
//         nums1[i] = nums1[i1];
//         i1--;
//       } else {
//         nums1[i] = nums2[i2];
//         i2--;
//       }
//     }
//   }
//   return nums1;
// };

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 4, 9, 34], 4));

// intervew questions 2

// var removeElement = function (nums, val) {
//   let p2 = nums.length - 1;
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     while (nums[p2] == val) {
//       p2--;
//     }
//     if (nums[i] == val) {
//       nums[i] = nums[p2];
//       p2--;
//     }
//     else {
//       k++
//     }
//   }
//   return k;
// };

// console.log(removeElement([3, 2, 2, 3, 8, 2, 1, 2, 0], 2));

// intervew questions 3

// var removeDuplicates = function (nums) {
// let k = 1;
// for (let i = 1; i < nums.length; i++) {
//   if (nums[i] !== nums[i - 1]) {
//     nums[k] = nums[i];
//     k++;
//   }
// }
// return k;
// };

// console.log(removeDuplicates(k));

// intervew questions 3

// var majorityElement = function (nums) {
//   let majCount = 0;
//   let majNumber = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (majCount == 0) {
//       majNumber = nums[i];
//     }
//     if (majNumber == nums[i]) {
//       majCount++;
//     } else {
//       majCount--;
//     }
//   }

//   return majNumber;
// };
// console.log(majorityElement([3, 2, 3, 2, 3, 2, 2]));
