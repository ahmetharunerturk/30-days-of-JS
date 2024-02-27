const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

const convertArrayToObject = (arr) => {
    const result = [];

    for (const [name, skills, scores] of arr) {
        const obj = {
            name: name,
            skills: skills,
            scores: scores
        };
        result.push(obj);
    }

    return result;
}

console.log(convertArrayToObject(students));

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

for (const{name,scores,skills,age} of users) {
    
    if(skills.length<2) console.log(console.log(name,skills))
}


const [E, pi, yerçekimi, humanBodyTemp, waterBoilingTemp] = constants

for (const item of constants) {
    console.log(item)
}

const[fin, est, sw, den , nor] = countries
console.log(fin)

const{width,height,area,perimeter} = rectangle
console.log(width)

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

const[name, skills, score] = student
console.log(name, skills, score[2], score[3])