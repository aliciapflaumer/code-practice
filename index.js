// write a function that returns the value of two numbers
const totalSum = function(param1, param2) {
  return param1 + param2
}
totalSum(3,4)


// firstDuplicate
// Write a solution with `0(n)` time complexity and `0(1)` addtional space complexity

// const a = [2, 4, 3, 5, 1]
const a = [2, 3, 3, 1, 5, 2];

function firstDuplicate(a) {
  for (let i = 0; i < a.length; i++) {
    if(a[Math.abs(a[i])-1] < 0)
      return Math.abs(a[i])
    else
      a[Math.abs(a[i])-1] = 0 - a[Math.abs(a[i])-1]
    }
    return -1
  }

console.log(firstDuplicate(a))


// CenturyFromYear

// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function CenturyFromYear (year) {
  // Use `Math.ceil()` to round up
  return Math.ceil(year/100)
}

// Check Palindrome

// Step 1: split the characters in the string up into separate strings
// Step 2: reverse the strings
// Step 3: join the strings back together so that they appear in one strings
// Step 4: Add the parameter `inputString` before ternary statement to check if they're equal
function checkPalindrome(inputString) {
	return inputString ===
    inputString.split("").reverse().join("")
}
// To test:
// Running `checkPalindrome('aabaa' .toLowerCase())` will output `true`
// Running `checkPalindrome('baa' .toLowerCase())` will output `false`

// firstNotRepeatingCharacter

// Write a solution that only iterates over the string once and uses O(1) additional memory
// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {
    for (let i = 0; i < s.length; i++) {
        if ( s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
            return s.charAt(i)
        }
    }
    return '_'
}
