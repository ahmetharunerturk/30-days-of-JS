let toplamCift =0;
let toplamTek =0;

for (let i = 0; i < 101; i++) {
    
    if(i%2==0) toplamCift+=i;
    else toplamTek+=i;
    
}

console.log(toplamCift)
console.log(toplamTek)

/* 

let toplam =0;

for (let i = 0; i < 101; i++) {
    
    toplam+=i;
    
}

console.log(toplam)



for (let i = 0; i < 101; i++) {
    if(i%2!=0) {
        console.log(i)
    }
    
}

for (let i = 0; i < 101; i++) {
    if(i%2==0) {
        console.log(i)
    }
    
}


console.log(" i    i^2   i^3")

for (let i = 0; i <11; i++) {
    console.log(`${i}  ${i*i}  ${i*i*i}`)
}


for (let i = 1; i <= 7; i++) {
    let line = "";
    for (let j = 1; j < i; j++) {
        line += "#";
    }
    console.log(line);
}

let i=0;

while(i<10){
    console.log(i);
    i++;
}

let j=10;

while(j>0){
    console.log(j);
    j--;
    if(j==0) break
}*/