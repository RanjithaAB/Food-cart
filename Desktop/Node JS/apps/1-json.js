const fs=require('fs')
const book={
    title:'Ego is the Enemy',
    author:'Ryan Holiday'
}

const bookJSON=JSON.stringify(book)
console.log(bookJSON)

const parseData=JSON.parse(bookJSON)
fs.writeFileSync('1-json.json',bookJSON)
// console.log(parseData.author)