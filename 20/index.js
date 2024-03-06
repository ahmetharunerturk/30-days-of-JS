let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
const PI = Math.PI
const gravity = 9.81

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']

//https://github.com/airbnb/javascript
//https://standardjs.com/
//https://google.github.io/styleguide/jsguide.html


class Person {
    constructor(firstName, lastName) {
      console.log(this) // buradan çıktı alıyoruz
      this.firstName = firstName
      this.lastName = lastName
    }
  }