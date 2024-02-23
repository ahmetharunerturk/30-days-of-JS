function rgbColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red}, ${green}, ${blue})`;
}


console.log(rgbColorGenerator());


/**

function swapValues(x, y) {
    let temp = x;
    x = y;
    y = temp;
    
    console.log(`x = ${x}, y = ${y}`);
}
swapValues(3, 4);

function printArray(arr) {
    for (const item of arr) {
        console.log(item);
    }
}
printArray([1,2,3,4,5,6])

function solveLinEquation(a, b, c, x, y) {
    return a * x + b * y + c;
}

console.log(solveLinEquation(2, 3, -5, 1, 2)); 


let BMI = function(height, weight) {

    let calc = weight/(height*height);

    if(calc<18.5) return console.log(`Underweight: ${calc}`);
    else if(calc<24.9) return console.log(`Normal weight: ${calc}`);
    else if(calc<29.9) return console.log(`Overweight:  ${calc}`);
    else if(calc>=30) return console.log(`Obese: ${calc}`);

    
}

BMI(1.81,90)


 * let circumOfCircle = function(r) {
    
    return Number(r*22/7*2);
}

console.log(circumOfCircle(3))

let areaOfCircle = function(r) {
    
    return Number(r*22/7*r);
}

console.log(areaOfCircle(2))

let volumeOfRectPrism = function(length,width,height) {
    
    return Number(length*height*width);
}

console.log(volumeOfRectPrism(2,3,10))

let perimeterOfRectangle = function(num1,num2) {
    
    return Number((num1+num2)*2);
}

console.log(perimeterOfRectangle(2,3))

let areaOfRectangle = function(num1,num2) {
    
    return Number(num1*num2);
}

console.log(areaOfRectangle(2,3))


let sum = function(num1,num2) {
    
    return Number(num1+num2);
}

console.log(sum(2,3))


const fullName = function(name,surname) {
    console.log(`${name} ${surname}`)
}

fullName("Ahmet Harun","Ertürk")


 
 const fullName = function() {
    console.log("Ahmet Harun Ertürk")
}

fullName()

 */