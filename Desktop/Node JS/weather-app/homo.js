const request=require('request')

// const url='http://api.weatherstack.com/current?access_key=a7885bcfb41f5cb0e99a7c0891cf66fc&query=37.8267,-122.4233'
const url='http://mfwk-claroperu-homolog.clarovideo.net/services/apa/metadata?sessionKey=3c5b773dc773765539920a1ac3d944fa-peru1111'

request({url:url,json:true},(error,response)=>{
     console.log(response.body.translations)
     console.log(error)
    if(error){
        console.log('Unable to connect to weather service!')
    }
    else if(response.body.error){
        console.log('Unable to find Location')
    }
    else{
        const data=JSON.parse(response.body.sprites_configuration)
        console.log(data)
        const val=JSON.parse(response.body.sprites_configuration)
        console.log(val)
        const val1=JSON.parse(response.body.test)
        const val2=JSON.parse(response.body.zte_keyburn_path)
        const val3=JSON.parse(response.body.translations)
        console.log(val1)
        console.log(val2)
        console.log(val3)
     console.log(response.body.sprites_configuration+' It is currently ' +response.body.zte_keyburn_path +" degrees out. There is a "+ response.body.translations + '% chance of rain.')
    }
    // const latitude=response.body.features[0].center[0]
    // const longitude=response.body.features[0].center[1]
    // console.log(latitude,longitude)
})
// Above code is for error handling in weather application
//Geocoding
//Address -> LAt/Long=>Weather