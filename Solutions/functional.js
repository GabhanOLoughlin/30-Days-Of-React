////forEach Method
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Ireland']
countries.forEach(function (country, index, arr) {
  console.log(index, country.toUpperCase()) 
}) 

countries.forEach((country) => console.log(country.toUpperCase())) 

const newCountries = []
countries.forEach((country) => newCountries.push(country.toUpperCase()))
console.log(newCountries)  // ["FINLAND", "ESTONIA", "SWEDEN", "NORWAY"]

//map Method
const newCountriesU = countries.map(function (country) {
    return country.toUpperCase()
  })
console.log(newCountriesU) // ["FINLAND", "ESTONIA", "SWEDEN", "NORWAY"]

const newCountriesUA = countries.map((country) => country.toUpperCase())
console.log(newCountriesUA)  // ["FINLAND", "ESTONIA", "SWEDEN", "NORWAY"]

const countriesLength = countries.map((country) => country.length)
console.log(countriesLength) // [7, 7, 6, 6]

//filter
const countriesWithLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesWithLand) // ["Finland", "Ireland"]

//reduce - returns a single value from array operation
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce((acc, cur) => acc + cur)
console.log(sum) // 55 - initial value 0

const sumi = numbers.reduce((acc, cur) => acc + cur, 5)
console.log(sumi) // 60 - initial value 5

const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((acc, cur) => acc + ' ' + cur)
console.log(helloWorld) // "Hello world !"

const value = numbers.reduce((acc, cur) => acc * cur)
console.log(value) // 3628800

//find (the first)
const firstEvenNum = numbers.find((n) => n % 2 === 0)
const firstOddNum = numbers.find((n) => n % 2 !== 0)
console.log(firstEvenNum) // 2
console.log(firstOddNum) // 1

const countriesWithWay = countries.find((country) => country.includes('way'))
console.log(countriesWithWay) // Norway

const index = countries.find((country) => country.includes('o'))
console.log(index) // Estonia

//findIndex
const findex = countries.findIndex((country) => country.length === 6)
console.log(findex) //2

//some
const someAreEvens = numbers.some((n) => n % 2 === 0)
const someAreOdds = numbers.some((n) => n % 2 !== 0)
console.log(someAreEvens) // true
console.log(someAreOdds) // true

//every
const allAreEvens = numbers.every((n) => n % 2 === 0)
const allAreOdds = numbers.every((n) => n % 2 !== 0)

console.log(allAreEvens) // false
console.log(allAreOdds)  // false
