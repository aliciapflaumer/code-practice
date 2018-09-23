// Find the second minimum number in an array

var array = [3, 6, 2, 8, 1, 5, 7, 4]
var array1 = [-3, -6, -2, -8, -1, -5, -7, -4]
// first, sort numbers in order
// second, return next minimum number
array.sort( function(a, b) {
  return a - b
})

array1.sort( function(a, b) {
  return a - b
})

console.log("Positive integer array: " + array) // 1,2,3,4,5,6,7,8
console.log("Second minimum number: " + array[1]) // 2
console.log("Minimum number: " + Math.min(...array)) // 1

console.log("Negative integer array " + array1) // -8,-7,-6,-5,-4,-3,-2,-1
console.log("Second minimum number: " + array1[1]) // -7
console.log("Minimum number: " + Math.min(...array1)) // -8
