
// async / await

require('dotenv').config()
const axios = require('axios')

const readlineSync = require('readline-sync')
const method = process.env.METHOD
const endpoint = process.env.ENDPOINT
const appid = process.env.APPID
const unit = process.env.UNIT
const url = `${method}://${endpoint}?`


const getCurrentWeather = async (lat, lon) => {
    const res = await axios
        .get(`${url}lat=${lat}&lon=${lon}&appid=${appid}&units=${unit}`)   
    console.log(`\nTemperature is ${res.data.main.temp} ºc\n`)
    currentWeather()
}

const currentWeather = () => {
    let choice = readlineSync.question(`Choose one: 
        1 - Enter latitude and longitude
        2 - Exit \n`)
    switch(parseInt(choice)) {
        case 1:
            var lat = readlineSync.question('Latitude: ')
            var lon = readlineSync.question('Longitude: ')
            getCurrentWeather(lat, lon)
            break
        case 2:
            console.log("告別\n")
            break
        default:
            console.log('An error has occurred, please try again\n')
            currentWeather()
    }
}

currentWeather()
