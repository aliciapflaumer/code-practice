a = [13, 20, 7, 4]
// digital root 4, 2, 7, 4
// output [20, 4, 13, 7]

// console.log(a[0].toString().split('').map(Number))
// output [ 1, 3 ]

function digitRootSort(a) {
  let digits = a.toString().split('')
  let realDigits = digits.map(Number)
  let arrayJoined  = realDigits.join('')
  let sorted = []

  for (let i = 0; i < arrayJoined.length; i++) {
      return arrayJoined[0] + arrayJoined[1]
  }
}
console.log(digitRootSort(a))
