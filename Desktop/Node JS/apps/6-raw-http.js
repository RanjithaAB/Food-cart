const http=require('http')
// const request = require('request')


const url = 'http://api.weatherstack.com/current?access_key=a7885bcfb41f5cb0e99a7c0891cf66fc&query=45,-75&units=f'

const request=http.request(url,(response)=>{
    let data=''


    response.on('data',(chunk)=>{
        data=data + chunk.toString()
        // console.log(chunk)
    })
    
    response.on('end',()=>{
        // console.log(data)
        const body=JSON.parse(data)
        console.log(body)
        // console.log(data)
    })
})


request.on('error',(error)=>{
    console.log('An error ',error)
})

request.end()