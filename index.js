const Palindrome = require('./function')

let str = 'dendy'
let palindrome = new Palindrome()
let hasil =palindrome.value(str)
console.log(`Apakah ${str} adalah ` + '' + `palindrom: ` + hasil)