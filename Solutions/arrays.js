const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB'],
  ]
  
for (const [first, second, third, fourth] of fullStack) {
    console.log(first, second, third, fourth)
}

const [x, y] = [2, (value) => value ** 2]

console.log(x)
console.log(y(5))

const rectangle = {
    width: 20,
    height: 10,
  }
  
  let { width, height, perimeter = 200 } = rectangle
  console.log(width, height, perimeter) // 20, 10, 200

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers.sort())