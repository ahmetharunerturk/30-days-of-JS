const numbers = [1, 2, 3, 4]
numbers.forEach(num=>console.log(num))

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare)

const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log(scoresGreaterEighty)

const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string')

console.log(areAllStr)

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) 

numbers.sort(function (a, b) {
    return a - b
  })
  
  console.log(numbers) // [3.14, 9.81, 37, 100]
  
  numbers.sort(function (a, b) {
    return b - a
  })
  console.log(numbers) //[100, 37, 9.81, 3.14]


const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))

function hello(){
    console.log("Hello")
}setInterval(hello, 2000)

function gb(){
    console.log("Good bye")
}setInterval(gb, 2000)
