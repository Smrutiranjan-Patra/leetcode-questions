// Roman numerals are represented using seven symbols: I, V, X, L, C, D, and M, each mapped to a fixed integer value. The Roman numeral system normally adds values from left to right, but when a smaller numeral appears before a larger numeral, it represents subtraction instead of addition. Examples of this subtractive rule include IV (4), IX (9), XL (40), XC (90), CD (400), and CM (900). The goal of this problem is to convert a given Roman numeral string into its corresponding integer value.

// The key observation to solve this problem efficiently is that the value of a Roman numeral character depends on the character that comes next to it. If the current character has a value greater than or equal to the next character, its value should be added to the total. If the current character has a smaller value than the next character, its value should be subtracted. By applying this comparison rule consistently, all Roman numeral cases are handled without hardcoding any special combinations.

// In the first approach, the string is traversed from left to right. During each iteration, the current character is compared with the next character. If the current value is smaller than the next value, it is subtracted from the running total; otherwise, it is added. The last character in the string is always added because there is no character after it to compare against. This approach processes each character exactly once and directly follows the Roman numeral rules.

// Left to right traversal (increment loop)

var romanToInt = function (s) {
    const romanTable = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        const next = s[i + 1];

        if (romanTable[curr] < romanTable[next]) {
            sum -= romanTable[curr];
        } else {
            sum += romanTable[curr];
        }
    }

    return sum;
};

// This approach runs in linear time because each character is visited once. The space complexity remains constant since only a fixed-size lookup table is used. The second approach traverses the string from right to left. The total is initialized with the value of the last Roman numeral character. As the loop moves leftward, the current character’s value is compared with the value of the character that was processed in the previous iteration. If the current value is smaller, it is subtracted from the total; otherwise, it is added. This method avoids the need to look ahead and instead relies on remembering the previously processed value.

// Right to left traversal (decrement loop)

var romanToInt = function (s) {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let output = map[s[s.length - 1]];

    for (let i = s.length - 2; i >= 0; i--) {
        let curr = map[s[i]];
        let next = map[s[i + 1]];

        if (curr < next) {
            output -= curr;
        } else {
            output += curr;
        }
    }

    return output;
};

// This solution also runs in linear time and constant space. Both approaches are optimal, as every character in the input string must be examined at least once to compute the correct integer value. The difference between the two lies only in traversal direction and comparison strategy, not in performance or correctness.

