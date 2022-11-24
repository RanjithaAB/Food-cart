// const chalk=require('chalk')
// const getNotes=require('./notes.js')

const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')
const { argv } = require('yargs')
// const { string, argv } = require('yargs')

// const command=process.argv[2]

// console.log(process.argv)

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    description:'Add a new node',
    builder:{
        title:{
            description:'Note add',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('Adding a new note!'+argv.title)
        // console.log('body: '+argv.body)
        notes.addNote(argv.title,argv.body)
    }
})

//Create remove command
yargs.command({
    command:'remove',
    description:'Remove a node',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        // console.log('Removing the node')
    }
})

//Create list command
yargs.command({
    command:'list',
    description:'listing your notes',
    handler(){
        notes.listNotes()
        // console.log('Listing out all notes')
    }
})

//Create read command
yargs.command({
    command:'read',
    description:'Read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
        // console.log('Title: '+argv.title)
    }
})

yargs.parse()
//add ,remove, read, list

// console.log(yargs.argv)

// if(command==='add'){
//     console.log('Adding note!')
// }
// else if(command==='remove'){
//     console.log('Removing note')
// }

// const msg = getNotes()
// console.log(msg)

// const greenMsg = chalk.red.inverse.bold('Success!')
// console.log(greenMsg)

// console.log(process.argv[2])




// const message=getNotes()
// console.log(message)

// const greenMsg=chalk.green('Success!')
// console.log(greenMsg)

// // console.log(validator.isEmail('ranjitha@gamil.com'))

// //Challenge: USe the chalk library in your project
// //
// //1.Install version 2.4.1 of chalk
// //2.Load chalk ito app2.js
// //3.Use it to print the string "Success!" to the console in green
// //4. Test your work

// //Bous:Use docs to mess around with other styles. Make text bold and inversed.
