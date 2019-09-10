const request = require('request')

const forecast = (longitude, latitude, callback) => {

    const url = 'https://api.darksky.net/forecast/95bd761401b3dcf2e7c216ce845da0fa/'+ longitude +','+ latitude +'?units=si'
    request({url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to service')
        } else if (body.error) {
            callback(body.error)
        } else {
            const precipProbability = body.currently.precipProbability;
            const temperature = body.currently.temperature;
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + temperature + ' degrees out. The high today is '+ body.daily.data[0].temperatureHigh + ', with a low of '+ body.daily.data[0].temperatureLow + '. There is a ' + precipProbability + '% chance of rain')
        }
    } )

}

module.exports = forecast