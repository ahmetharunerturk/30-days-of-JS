const  webTechs = [
    
    'HTML',
    
    'CSS',
    
    'JavaScript',
    
    'React',
    
    'Redux',
    
    'Node',
    
    'MongoDB'
]

const  webTechs = [
    
    'HTML',
    
    'CSS',
    
    'JavaScript',
    
    'React',
    
    'Redux',
    
    'Node',
    
    'MongoDB'
]

const  countries = [

    'Albania',
    
    'Bolivia',
    
    'Canada',
    
    'Denmark',
    
    'Ethiopia',
    
    'Finland',
    
    'Germany',
    
    'Hungary',
    
    'Ireland',
    
    'Japan',
    
    'Kenya'
    
]


if(countries.includes("Ethiopia")==true){
    console.log("ETHIOPIA")
}else{
    countries.push("Ethiopia")
}

console.log(countries)

if(webTechs.includes("Sass")==true){
    console.log("Sass is a CSS preprocess")
}else{
    webTechs.push("Sass")
}

console.log(webTechs)

const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(shoppingCart.includes('Meat')==false){
    shoppingCart.unshift("Meat")
}

if(shoppingCart.includes('Sugar')==false){
    shoppingCart.push("Sugar")
}

shoppingCart[3] = 'Green Tea'

console.log(shoppingCart)


let  text =

'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.split(' ');

console.log(words)

console.log(words.length)


    
console.log("İlk eleman:"+webTechs[0])
console.log("Ortanca eleman:"+webTechs[(webTechs.length-1)/2])
console.log("Son eleman:"+webTechs[webTechs.length-1])

console.log(webTechs[3].toUpperCase())
console.log(webTechs.join(',')+" are big IT companies.")

let con = webTechs.includes('Node');
console.log(con)

if(con == false){
    console.log("Nodes yok")
}else{
    console.log("Nodes var")
}

