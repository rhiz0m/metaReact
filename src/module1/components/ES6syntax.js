// ES6 Syntax

//const myItems = (item) => item * 10
const myItems = item => item * 10
console.log(myItems(8)) // 80

const items = [8, 6, 4, 12]
const createNewArr = items.map((item) => `Map: ${item * 50}`)
// map method creates a new array, it dosen't mutate the original
// Use when arr needs to be transformed

console.log(createNewArr) // [ 80, 60, 40, 120 ]

const temporaryArr = items.forEach((item) =>
  console.log(` ForEach: ${item * 100}`)
)
console.log(temporaryArr) // undefined
// For Each good to show data from ex an API

const test = [4, 2, 6].forEach(item => console.log(` ForEach: ${item * 50}`))
console.log(test)