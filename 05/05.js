require('dotenv').config()
const axios = require('axios')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const method = process.env.METHOD
const endpoint = process.env.ENDPOINT
const appid = process.env.APPID
const unit = process.env.UNIT
const url = `${method}://${endpoint}?`


const getCurrentWeather = (lat, lon) => {
    axios
        .get(`${url}lat=${lat}&lon=${lon}&appid=${appid}&units=${unit}`)
        .then(result => {
            console.log(`\nTemperature is ${result.data.main.temp} ºc\n`)
            currentWeather()
        })
        .catch(error => {
            console.log(error.message)
        })
}

const currentWeather = () => {
    readline.question(`Choose one: 
        1 - Enter latitude and longitude
        2 - Exit \n`,
        choice => {
            switch(parseInt(choice)) {
                case 1:
                    readline.question('Latitude: ', lat => {
                        readline.question('Longitude: ', lon => {
                            getCurrentWeather(lat, lon)
                        })
                    })
                    break
                case 2:
                    console.log("告別\n")
                    readline.close()
                    break
                default:
                    console.log('An error has occurred, please try again\n')
                    currentWeather()
            }
        }
    )
}

currentWeather()
