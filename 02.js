// 2. Refaça o exercício 1 usando arrow functions.

const addition = (a, b) => a + b

const subtraction = (a, b) =>  a - b

const multiplication =(a, b) => a * b

const division = (a, b) => a / b

const mathOperations = (a, b) => {
    let add = addition(a, b)
    let sub = subtraction(a, b)
    let mult = multiplication(a, b)
    let div = division(a, b)
    console.log(`
        addition = ${add},
        subtraction = ${sub},
        multiplication = ${mult},
        division = ${div}
    `)
}

//test
mathOperations(2, 2)
