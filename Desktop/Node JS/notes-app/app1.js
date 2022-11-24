const validator=require('validator')
const getNotes=require('./notes.js')

const message=getNotes()

console.log(message)

console.log(validator.isEmail('ranjitha@gamil.com')) // True
//console.log(validator.isEmail('gamil.com')) //--->False
console.log(validator.isURL('https://mead.io')) //True
//console.log(validator.isURL('https/mead.io')) //False



//Challenge:Define and use a function in new file
//
//1.Create a new file called notes.js
//2.Create getNotes function that returns "Your notes...."
//3.Export getNotes function
//4.From app.js, load in and call the function printing message to console


// const add=require('./utils.js')

// //const name='Ranjitha'
// const sum=add(4,-2)

// console.log(sum);