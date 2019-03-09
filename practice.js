var getInitials = function (string) {
    var names = string.split(' ')
        initials = names[0].substring(0, 1).toUpperCase()

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase()
    }
    return initials;
};

// console.log(getInitials('Alicia Pflaumer'));

let str = "";

function getMiddle(str) {
  let length = str.length
  let middle = Math.floor(length / 2)

    if (length % 2 === 0) {
      return str[middle - 1] + str[middle] // returns 2 middle characters
    } else {
      return str[middle] // returns middle character
    }
}
// console.log(length / 2)
// console.log(str[middle]) // returns  "r" in "source"
// console.log(str[middle - 1] + str[middle]) // returns "ur" in "source"

console.log(getMiddle('table')) // odd
console.log(getMiddle('source')) // even
console.log(getMiddle('A')) //odd
