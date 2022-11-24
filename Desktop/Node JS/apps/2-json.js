 const fs=require('fs')

// const datbuffer=fs.readFileSync('1-json.json')
// const dataJSON=datbuffer.toString()
// const dat=JSON.parse(dataJSON)
// console.log(dat.title)

// // console.log(datbuffer.toString())

const dataBuffer=fs.readFileSync('1-json.json')
const dataJSON=dataBuffer.toString()
const user=JSON.parse(dataJSON)

user.name='Gunther'
user.age=54

const userJSON=JSON.stringify(user)
// console.log(userJSON)
fs.writeFileSync('1-JSON.json',userJSON)