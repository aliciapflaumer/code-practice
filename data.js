let data = {
  "cars": [
    {
      "Make": "Ford",
      "Model": "Focus"
    },
    {
      "Make": "Toyota",
      "Model": "Corola"
    },
    {
      "Make": "Volkswagon",
      "Model": "Jetta"
    }
  ]
}

console.log(data)
// { cars:
//    [ { Make: 'Ford', Model: 'Focus' },
//      { Make: 'Toyota', Model: 'Corola' },
//      { Make: 'Volkswagon', Model: 'Jetta' } ] }

console.log(data.cars[0])
// { Make: 'Ford', Model: 'Focus' }

console.log(data.cars[0].Make, data.cars[0].Model)
// Ford Focus
