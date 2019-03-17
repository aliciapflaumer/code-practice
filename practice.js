var getInitials = function (string) {
    var names = string.split(' ')
        initials = names[0].substring(0, 1).toUpperCase()
    var period = '.'

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase()
    }
    return initials;
};

// console.log(getInitials('User Name'));

// Get middle character(s) of a string
let str = "";

function getMiddle(str) {
  let length = str.length
  let middle = Math.floor(length / 2)

    if (length % 2 === 1) {
      return str[middle] // returns middle character
    } else {
      return str[middle - 1] + str[middle] // returns 2 middle characters
    }
}
// console.log(length / 2)
// console.log(str[middle]) // returns  "r" in "source"
// console.log(str[middle - 1] + str[middle]) // returns "ur" in "source"

// console.log(getMiddle('bug')) // odd
// console.log(getMiddle('Akamai')) // even
// console.log(getMiddle('source')) // even
// console.log(getMiddle('A')) //odd

// Compare numbers
function compare(a,b) {
  if ( a < b ) {
    return a + " is less than " + b
  } else if (a > b) {
    return a + " is greater than " + b
  } else {
    return a + " and " + b + " are equal"
  }
}
// console.log(compare(14, 14))


let phoneNumber = ""
function validPhoneNumber(phoneNumber) {
  let validCombo = /^\([0-9]{3}\)\s([0-9]{3})([-])([0-9]{4})$/
  let match = validCombo.exec(phoneNumber)
  if (match != null) {
    return true
  } else {
    return false
  }

  // A one line solution:
  // return /^\([0-9]{3}\)\s([0-9]{3})([-])([0-9]{4}$)/.test(phoneNumber)
}
// console.log(validPhoneNumber("(123) 456-7890"))


// Create a function that takes a string and returns a new string with the vowels removed.
function disemvowel(str){
  return str.replace(/[aeiou]/gi, '')
}
// console.log(disemvowel('The quick brown fox jumps over the lazy dog'))
// output: Th qck brwn fx jmps vr th lzy dg
