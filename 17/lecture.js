const skills1 = ['HTML','CSS','JS','React']


const skillsJSON = JSON.stringify(skills1, undefined, 4)
localStorage.setItem('skills', skillsJSON)

let skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
]
  
let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)


console.log(localStorage.getItem('skills'));
localStorage.clear()