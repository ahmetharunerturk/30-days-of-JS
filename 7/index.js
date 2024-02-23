const anonymousFun = function() {
    console.log(
      'İsimsiz bir fonksiyonum ve değerim anonim olarak saklanıyor'
    )
}


// Function expression
const square = function() {
    console.log("Bu bir expression function türünde fonksiyondur")
}

let squaredNum = (function(n) {
    return n * n
  })(10)
  
console.log(squaredNum)

//arr = []: default value

const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
}
  
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))