const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let minAge = undefined;
let maxAge = undefined;
let ortalama = undefined;
let toplamYas = 0;

for (let i = 0; i < ages.length; i++) {

    toplamYas+=ages[i];

    if (minAge === undefined || ages[i] < minAge) {
        minAge = ages[i];
    }

    if (maxAge === undefined || ages[i] > maxAge) {
        maxAge = ages[i];
    }
}

console.log("min:", minAge);
console.log("max:", maxAge);

let medyan =0;

if(ages.length%2 == 0){

    medyan = (ages.length)/2
    console.log(medyan)
    console.log(ages[medyan]+" ve "+ ages[medyan-1])

}else{
    medyan = (ages.length-1)/2
    console.log(ages[medyan])
}

ortalama = toplamYas/ages.length;

console.log(ortalama)