function shapeArea(n) {
  area = 1

  for(i = 1; i <= n; i++) {
    area += ( (i*4) - 4 )
  }
  return area
}
// console.log(shapeArea(3))

let statues = [6, 2, 3, 8]
function makeArrayConsecutive2(statues) {
  // sort them from lowest to highest
  statues.sort( (a,b) => {
    return a-b
  })
  // find the min number and max number
  let min = statues[0]
  let max = statues[statues.length -1]
  let count = 0

  for (let i = min; i < max; i++) {
    if (statues.indexOf(i) === -1) {
      count++
    }
  }
  return count
}
// console.log(makeArrayConsecutive2(statues))
