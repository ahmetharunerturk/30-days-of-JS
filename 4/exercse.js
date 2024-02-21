let age = prompt("Enter your age: ")
if(age>=18){
    console.log("You are old enough to drive.")
}else{
    let kalan= 18-age;
    console.log(`You are left with ${kalan}.`)
}


let yourAge = prompt("Enter your age: ")
let myAge = 21;


if(yourAge>myAge){
    let dif = yourAge-myAge;
    console.log(`You are ${dif} years older than me.`)
}else if(myAge>yourAge){
    let dif = myAge-yourAge;
    console.log(`I'm ${dif} years older than you.`)
}else{
    console.log(`Same age`)
}

let note = prompt("Enter the note: ")

if(note>=80 && note<=100){
    console.log(`A`)
}else if(note>=70 && note<=89){
    console.log(`B`)
}else if(note>=60 && note<=69){
    console.log(`C`)
}else if(note>=50 && note<=59){
    console.log(`D`)
}else if(note>=0 && note<=49){
    console.log(`F`)
}

let dayInput = prompt("Enter the day: ")
let day = dayInput.toLocaleLowerCase();

if(day=="sunday" || day=="saturday"){
    console.log(`${dayInput} is a weekend.`)
}else{
    console.log(`${dayInput} is a working day.`)
}