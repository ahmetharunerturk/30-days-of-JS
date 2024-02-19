const PI = Math.PI;

console.log(PI);

const randNum = Math.random()

console.log(Math.ceil(randNum*11));

let userOne = {
    name:'Asabeneh',
    role:'teaching',
    country:'Finland'
};

console.log(`My name is ${userOne.name}. I'm ${userOne.role} and from ${userOne.country}`);

/*
\n: yeni satır
\t: Tab, 8 boşluk anlamına gelir ( klavyedeki tab tuşunu temsil eder )
\\: Ters eğik çizgi
\': Tek Tırnak (')
\": Çift Tırnak (")

*/

console.log(userOne.name.length)
console.log(userOne.name[0])
console.log(userOne.name.toUpperCase())

let num = '10'
console.log(typeof num)

let numInt = parseInt(num)
console.log(typeof numInt)

let numFloatSTR = '9.81'
let numFloat = parseFloat(num)
