const request=require('request')

// const url='http://api.weatherstack.com/current?access_key=a7885bcfb41f5cb0e99a7c0891cf66fc&query=37.8267,-122.4233'
const url='http://api.weatherstack.com/current?access_key=a7885bcfb41f5cb0e99a7c0891cf66fc&query=15.317277,75.713890'

request({url:url,json:true},(error,response)=>{
     console.log(response.body.current)
     console.log(error)
    if(error){
        console.log('Unable to connect to weather service!')
    }
    else if(response.body.error){
        console.log('Unable to find Location')
    }
    else{
     console.log(response.body.current.weather_descriptions[0]+' It is currently ' +response.body.current.temperature +" degrees out. There is a "+ response.body.current.precip + '% chance of rain.')
    }
    // const latitude=response.body.features[0].center[0]
    // const longitude=response.body.features[0].center[1]
    // console.log(latitude,longitude)
})
// Above code is for error handling in weather application
//Geocoding
//Address -> LAt/Long=>Weather