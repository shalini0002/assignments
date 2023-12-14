/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowercaseStr = str.toLowerCase();

  // Remove non-alphanumeric characters from the string
  const cleanStr = lowercaseStr.replace(/[^a-z0-9]/g, '');

  // Check if the cleaned string is equal to its reverse
  return cleanStr === cleanStr.split('').reverse().join('');


}

module.exports = isPalindrome;
