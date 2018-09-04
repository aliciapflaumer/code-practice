// In Javascript, slow with large set of steps:
// function climbingStairs(n) {
//   if (n <= 2) {
//     return n
//   }
//   return climbingStairs(n-2) + climbingStairs(n-1)
// }
// console.log(climbingStairs(10))

// Better:
function climbingStairs(n) {
  let total = 1

  for (let i = 2; i <= n; i++) {
    total += climbingStairs(n - i)
  }
  return total
}

console.log(climbingStairs(5))
