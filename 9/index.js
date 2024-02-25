const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/*
countries.forEach(country => console.log(country))
names.forEach(name => console.log(name))
numbers.forEach(number => console.log(number))
products.forEach(pro => console.log(pro))


const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare)

const countriesContainingLand = countries.filter((country) =>
  country.includes('land')

  const upper = countries.map(country => country.toUpperCase());
console.log(upper);


const leng = countries.map(country => country.length);
console.log(leng);

const sq = numbers.map(number => number ** 2);
console.log(sq);

const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);

const price = products.map(product => console.log(product.price))

const countriesContainingLand = countries.filter((country) => country.includes('land'))
console.log(countriesContainingLand)

const countriesLength = countries.filter((country) => country.length===6)
console.log(countriesLength)

const countriesE = countries.filter((country) => country.charAt(0)=='E')
console.log(countriesE)

const hasPrice = products.filter((product)=>typeof product.price == "number")
console.log(hasPrice)

const arr = [1,2,3,"Ahmet","HS",{1: 1,2:2},3.2,[1,2,3,4,5,6]]

const isString = arr.filter((item)=>typeof item == "string")
console.log(isString)

const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

const nameSeven = names.some(name => name.length > 7);
console.log("Seven length", nameSeven);

const land = countries.every(country => country.includes("land"));
console.log(land)

const countriesSix = countries.find((country)=>country.length===6)
console.log(countriesSix)

const countriesSixfirst = countries.findIndex((country)=>country.length===6)
console.log(countriesSixfirst+1)

const norway = countries.findIndex((country)=>country==="Norway")
console.log(norway)

const russ = countries.findIndex((country)=>country==="Russia ")
console.log(russ)

const total = products.filter((product)=>typeof product.price == "number").map((product)=>product.price).reduce((acc, cur) => acc + cur, 0)
console.log(total)

*/

const sum = products.reduce((total, current) => {

    const hasPrice = products.filter((product)=>typeof product.price == "number")

    if (hasPrice) {
      
      return total + Number(current.price);
    } else {
      return total;
    }
  }, 0);
  
  console.log(sum);
  

