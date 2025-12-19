// Shuffle the Array

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
// Example 2:

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]
// Example 3:

// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]


/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let output = new Array(2 * n), idx = 0

    for (let index = 0; index < n; index++) {
        output[idx++] = nums[index]
        output[idx++] = nums[index + n]
    }

    return output
};

// This approach works by creating the output array with its final required size in advance and then filling it in a single pass. Since the input array contains the first n elements as x values and the next n elements as y values, the algorithm iterates from index 0 to n - 1 and, in each iteration, places two elements into the output array. First, it inserts the element from the x part using nums[i], and immediately after that, it inserts the corresponding element from the y part using nums[i + n]. An index pointer is used to keep track of the current position in the output array, ensuring elements are written in alternating order without overwriting or skipping positions. This approach avoids repeated array copying, uses only one loop, and writes each element exactly once, resulting in linear time complexity and optimal performance.