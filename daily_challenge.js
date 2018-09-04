// var grid = [[".",".",".","1","4",".",".","2","."],
//  [".",".","6",".",".",".",".",".","."],
//  [".",".",".",".",".",".",".",".","."],
//  [".",".","1",".",".",".",".",".","."],
//  [".","6","7",".",".",".",".",".","9"],
//  [".",".",".",".",".",".","8","1","."],
//  [".","3",".",".",".",".",".",".","6"],
//  [".",".",".",".",".","7",".",".","."],
//  [".",".",".","5",".",".",".","7","."]]

// function sudoku2(grid) {
//   for (var i = 1; i <= 9; i++) {
//     if (grid.indexOf(i) === -1) {
//       return false
//     }
//   }
//   return true
// }
// console.log(sudoku2(grid))
// expect true


// const array = [1, 2, '3', '4', 5]
// const newArray = array.map(Number)
const sum = (accumulator, currentValue) => accumulator + currentValue
// console.log([1, 2, '3', '4', 5].map(Number).reduce(sum))
// console.log(newArray.reduce(sum))
// output 15

const words = ['car', 'boat', 'motorcycle', 'scooter', 'bus']
const longestWord = words.sort((a,b) => b.length - a.length)[0]
// console.log(longestWord)
// motorcycle

const words2 = ['car', 'boat', 'motorcycle', 'scooter', 'bus']
const longestWord2 = words2.filter(word2 => word2.length > 4)
// console.log("Words with more than 4 characters: " + longestWord2)

//// ************

// function sudoku2(grid) {
//   for (var i = 1; i <= 9; i++) {
//     if (grid.indexOf(i) === +1) {
//       return false
//     }
//   }
// }
// console.log(grid.every(sudoku2))
