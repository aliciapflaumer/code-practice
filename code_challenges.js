// find the numbers

function findNumber(arr, k) {

    for(i = 0; i < arr.length; i++) {
        if (arr[i] === k ) {
            return "YES"
        } else {
            return "NO"
        }
    }
}

// Odd Numbers
function oddNumbers(num) {
  return !!(num % 2)
}
console.log("1 is " + oddNumbers(1))
// output `1 is true`
console.log("2 is " + oddNumbers(2))
// output `2 is false`


// Number Complement

function getIntegerComplement(n) {

  var binary = parseInt(n).toString(2) // convert n to binary
  var complement = ""
  for (var i in binary)
    complement = complement + ((binary[i] === "1") ? 0 : 1) // invert the number to 1 or 0
    return  parseInt(complement,2)
}


// Pangrams
function isPangram(strings) {


}
