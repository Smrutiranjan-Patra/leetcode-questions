// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0, max = 0

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === 1) {
            count++;
        } else {
            max = Math.max(count, max);
            count = 0
        }

    }

    max = Math.max(count, max);

    return max;
};

// This problem is solved by scanning the array once while keeping track of the current streak of consecutive ones and the maximum streak seen so far. As the loop moves through the array, the count variable is incremented whenever a 1 is encountered, representing the length of the ongoing consecutive sequence. When a 0 appears, it signals the end of the current streak, so the maximum value is updated by comparing the current count with the previously stored maximum, and the count is reset to zero. After the loop finishes, the maximum is updated one final time to handle the case where the array ends with a sequence of ones. This single-pass approach ensures that each element is processed exactly once, resulting in linear time complexity and constant extra space.