function solution(number) {
  let result = ''
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let roman_numeral = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"]

  for (let i = 0; i <= decimal.length; i++) {
    // loop through every element of arrays
    while (number%decimal[i] < number) {
    // keep trying same number until it can't anymore
      result += roman_numeral[i]
      //  add matching number to the result
      number -= decimal[i]
      // remove decimal value of the roman number
    }
  }
  return result
}

console.log(solution(4))
