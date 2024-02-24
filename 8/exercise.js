const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Ahmet: {
        email: 'hi@ahmetharunerturk.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Django', 'React', 'Node'],
        age: 21,
        isLoggedIn: false,
        points: 40
      }
}

// En fazla yeteneğe sahip kişiyi bulma
let maxSkillsUser = null;
let maxSkillsCount = 0;

for (const user in users) {
    if (users.hasOwnProperty(user)) {
        const skillsCount = users[user].skills.length;
        if (skillsCount > maxSkillsCount) {
            maxSkillsCount = skillsCount;
            maxSkillsUser = user;
        }
    }else console.log("no Prop");
}

console.log(maxSkillsUser);


const keys = Object.keys(users.Ahmet)
const values = Object.values(users.Ahmet)

console.log("Ahmet:",keys)
console.log("Ahmet:",values)

