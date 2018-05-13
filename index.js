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
