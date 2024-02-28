let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)

console.log(regEx)

const str = 'I love JavaScript'
const pattern1 = /love/
const result = pattern1.test(str)
console.log(result)

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

const pattern2 = '[Aa]pple' // this square bracket means either A or a
const txt2 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt2.match(pattern2)

console.log(matches)  