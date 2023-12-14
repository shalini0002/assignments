/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const lowercaseStr = str.toLowerCase();

  // Define an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Initialize a counter for the number of vowels
  let vowelCount = 0;

  // Iterate through each character in the lowercase string
  for (let char of lowercaseStr) {
      // Check if the character is a vowel
      if (vowels.includes(char)) {
          vowelCount++;
      }
  }

  return vowelCount;
}

module.exports = countVowels;