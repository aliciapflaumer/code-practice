var getInitials = function (string) {
    var names = string.split(' ')
        initials = names[0].substring(0, 1).toUpperCase()

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase()
    }
    return initials;
};

// console.log(getInitials('Alicia Pflaumer'));

var s = " ";

function getMiddle(s) {
  for (var i = 0; i < s.length; i++) {
    if (s.length % 2) {
      return s + " is odd"
    } else {
      return s + " is even"
    }
  }
}
console.log(getMiddle('table'))
console.log(getMiddle('source'))
console.log(getMiddle('A'))
