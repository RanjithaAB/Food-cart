const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address=process.argv[2]

// console.log(process.argv)

if(!address){
    console.log('Please provide address')
}

// const geocode=(address,callback)=>{
//     const url='http://api.weatherstack.com/current?access_key=a7885bcfb41f5cb0e99a7c0891cf66fc&query=' +encodeURIComponent(address)

//     request({url:url,json:true},(error,response)=>{
//         if(error){
//            callback('Unable to connect to location services!',undefined) 
//         }
//         else if(response.body.error){
//             callback('Unable to find location.Try another search.',undefined)
//         }
//         else{
//             callback(undefined,{
//                 latitude:response.body.location.lat,
//                 longitude:response.body.location.lon,
//                 location: response.body.location.country
//             })
//         }
//     })
// }

// geocode(-122.42363,(error,data)=>{
   
// geocode('Philadelphia',(error,data)=>{
   else
   {
    // geocode(address,(error,data)=>{
    geocode(address,(error,{latitude,longitude,location})=>{


    if(error){
     return console.log(error)
    }
    // console.log('Error',error)
    // console.log('Data',data)

    // forecast(data.latitude,data.longitude,(error,forecastData)=>{
    forecast(latitude,longitude,(error,forecastData)=>{    
    if(error){
            return console.log(error)
        }

        console.log(location)
        console.log(forecastData)


        // console.log('Error',error)
        // console.log('Data',data)
    })
})
   }

// forecast(37.8267,-122.4233,(error,data)=>{
//     console.log('Error',error)
//     console.log('Data',data)
// })



// const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-112'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')   
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })



// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })