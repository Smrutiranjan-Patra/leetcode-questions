
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let output = new Array(nums.length * 2);

    for (let i = 0; i < output.length; i++) {
        output[i] = nums[i % nums.length]
    }

    return output;
};

// The problem asks to create a new array whose length is twice the length of the given array and whose elements are formed by placing the original array back to back with itself.This means that the first half of the result should be identical to the original array, and the second half should again contain the same elements in the same order.

// Since the size of the output array is known in advance, an array of size 2 * nums.length is created beforehand.This avoids dynamically growing the array and makes the intention of the code clear.

// The loop runs from index 0 to 2 * nums.length - 1, covering every position in the output array.For each index i, the corresponding value from the original array is selected using modulo indexing.The expression i % nums.length maps indices from the second half of the output array back to valid indices of the original array.When i is less than nums.length, the modulo operation returns i itself, so elements are copied directly.When i is greater than or equal to nums.length, the modulo wraps the index back to the beginning of the original array.

// This approach eliminates the need for conditional checks or multiple loops and constructs the concatenated array in a single pass.Each element is written exactly once, resulting in linear time complexity.The space complexity is also linear, as a new array is required to store the concatenated result.

// Overall, this solution is optimal, clean, and efficient, using index mapping to achieve array concatenation without unnecessary branching or extra iterations.