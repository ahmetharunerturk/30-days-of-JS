let date = new Date()
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let minute = date.getMinutes();
let hour = date.getHours()

console.log(day+"/"+month+"/"+year+" "+hour+":"+minute)

let number = prompt('Enter number', 'number goes here')
console.log(number)

const agree = confirm('Are you sure you like to delete? ')
console.log(agree)

let a = parseInt(prompt('a:'))
let b = parseInt(prompt('b:'))
let c = parseInt(prompt('c:'))

console.log(a+b+c)


let base = prompt('Base:')
let height = prompt('Height:')

console.log(base*height/2)