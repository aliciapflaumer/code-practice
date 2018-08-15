// Fibonacci sequence
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
function fib(n) {
  if (n == 1 || n == 2) {
    result = 1
  } else {
    result = fib(n-1) + fib(n-2)
  }
  return result
}
console.log(fib(3))

// while loop
function fibonacci(result, len) {
  let num1 = result[0]
  let num2 = result[1]
  let next
  cnt = 2

  while (cnt < len) {
    next = num1 + num2
    num1 = num2
    num2 = next
    result.push(next)
    cnt++
  }

  return result
}
console.log("Fib1 " + fibonacci([0,1],15))

// recursion
function fibonacci2(result, len) {
  if (result.length >= len) {
    return result
  }

  result.push(result[result.length - 2] + result[result.length -1])
  return fibonacci2(result, len)
}
console.log("Fib2 " + fibonacci2([0,1],15))
