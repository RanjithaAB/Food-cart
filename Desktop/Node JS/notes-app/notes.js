// const { timeEnd } = require('console')
// const fs=require('fs')
// const { title } = require('process')
// const chalk=require('chalk')


// const getNotes=()=>{
//     return 'Your Notes..'
// }

// const addNote=(title,body)=>{
//     const notes=loadNotes()
//     const duplicateNotes=notes.filter((note)=> note.title===title)
//     const duplicateNote=notes.find((note)=>note.title===title)

//     // const notes=loadNotes()
//     // const duplicateNotes=notes.filter(function(notes){
//     //     return notes.title===title

//     // if(duplicateNotes.length===0){
//         if(!duplicateNote){
//         notes.push({
//             title:title,
//             body:body
//         })
    
//         saveNotes(notes)
//         console.log(chalk.green.inverse('New note added'))
//     }
//     else{
//         console.log(chalk.red.inverse('Note title taken'))
//     }

//     // const removeNote=function(title){

//     // }

//     // console.log(notes)


// const saveNotes=(notes)=>{
//     const dataJSON=JSON.stringify(notes)
//     fs.writeFileSync('notes.json',dataJSON)
// }



// const removeNote=(title)=>{
//     const notes=loadNotes()
//     const notesToKeep=notes.filter((note)=>note.title!==title)


//     // const notes=loadNotes()
//     // const notesToKeep=notes.filter(function(note){
//     //     return note.title!==title

//     if(notes.length>notesToKeep.length){
//         console.log(chalk.green.inverse('Note removed'))
//         saveNotes(notesToKeep)

//     }else{
//         console.log(chalk.red.inverse('No note found!'))
//     }

//     // console.log(title)
// }

// const listNotes=()=>{
//     const notes=loadNotes()

//     console.log(chalk.inverse('Your Notes'))

//     notes.forEach((note)=>{
//         console.log(note.title)
//     })
// }

// const readNote=((title)=>{
//     const notes=loadNotes()
//     const note=notes.find((note)=>note.title)

//     if(note){
//         console.log(chalk.inverse(note.title))
//         console.log(note.body)
//     }
//     else{
//         console.log(chalk.red.inverse('Note not found'))
//     }
// })
// // const saveNotes=(notes)=>{
// //     const dataJSON=JSON.stringify(notes)
// //     fs.writeFileSync('notes.json',dataJSON)
// //     // console.log(note.title)
// // }

// const loadNotes=()=>{
//     try{
//         const dataBuffer=fs.readFileSync('notes.json')
//         const dataJSON=dataBuffer.toString()
//         return JSON.parse(dataJSON)
//     }
//     catch(e){
//         return[]
//     }
    
// }
// module.exports={
//     getNotes:getNotes,
//     addNote:addNote,
//     removeNote:removeNote,
//     listNotes:listNotes,
//     readNote:readNote
// }
const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    // console.log(duplicateNote)

    // debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}