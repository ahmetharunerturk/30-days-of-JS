class Person {
    constructor(
        firstName = 'Asabeneh',
        lastName = 'Yetayeh',
        age = 250,
        country = 'Finland',
        city = 'Helsinki'
    ) {

      this.firstName = firstName
      this.lastName = lastName
      this.age = age;
    }

    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
      }

    getAge(){
        return this.age;
    }

    setAge(age){
        this.age =age;
        return age
    }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }

}
  
const person = new Person('Asabeneh', 'Yetayeh', 20, 'Finland', 'Helsinki')

console.log(person.getAge());
console.log(person.setAge(10));
console.log(Person.favoriteSkill());

//Inheritance 

class Student extends Person {
    saySomething() {
      console.log('I am a child of the person class')
    }
  }
  
  const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
  console.log(s1)
  console.log(s1.getAge())
