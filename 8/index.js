//Object.assign:Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır
//Object.keys: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır
//Object.values: Nesnenin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır
//hasOwnProperty: Bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır



const dog = {
  name:"Karabaş",
  color:"Brown",
  age:4,
  bark: function(){
      console.log("woof woof")
  },
  getName: function(){
      console.log(this.name)
  },
  getColor: function(){
      console.log(this.color)
  },
  getAge: function(){
      console.log(this.age)
  },
}
console.log(dog.getAge)


const person1 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
  }
  
  // "." operatörü kullanarak
  console.log(person.firstName)
  console.log(person.lastName)
  console.log(person.age)
  console.log(person.location) // undefined

  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  
  console.log(person.getFullName())

  