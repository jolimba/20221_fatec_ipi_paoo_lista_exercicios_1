require('dotenv').config()
const axios = require('axios')

const method = process.env.METHOD
const endpoint = process.env.ENDPOINT

const currentWeather = () => {

}

readline.question("First number: ", num1 =>{
    readline.question("Second number: ", num2 => {
        mathOperations(parseInt(num1), parseInt(num2))
    })
})


