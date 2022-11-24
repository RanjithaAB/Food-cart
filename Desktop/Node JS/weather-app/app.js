// //Asynchronous function in node js

// console.log('Starting')

// setTimeout(()=>{
//     console.log('2 Second timer')
// },2000)

// setTimeout(()=>{
//     console.log('0 Second Timer')
// },0)

// console.log('Stopping')

const request=require('request')

const url='http://api.weatherstack.com/current?access_key=a7885bcfb41f5cb0e99a7c0891cf66fc&query=37.8267,-122.4233'
// const url='http://mfwk-claroperu-homolog.clarovideo.net/services/apa/asset?sessionKey=3c5b773dc773765539920a1ac3d944fa-peru1111'

request({url:url,json:true},(error,response)=>{
    //request({url:url,json:true},(eroor,response)=>{

    // console.log(response)
    //  const data=JSON.parse(response.body)
     console.log(response.body)
     console.log(response.body.location.name)
     console.log('latitude is: '+response.body.location.lat)
     console.log('longitude is: '+response.body.location.lon)

     console.log(response.body.current.weather_descriptions[0]+' It is currently ' +response.body.current.temperature +" degrees out. There is a "+ response.body.current.precip + '% chance of rain.')

    // console.log(response.body.AMCO_susc_honduras_wp0+' It is currently ' +response.body.AMCO_ppe_panama_wp0)

})

// exports.CurrentDateTime = function () {
//     var d = new Date();
//     return d;
// };
