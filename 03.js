// 3. Crie um objeto JSON que abriga todas as operações do exercício 2.

const allOperations = {
    "add": addition = (a, b) => a + b,
    "sub": subtraction = (a, b) =>  a - b,
    "mult": multiplication =(a, b) => a * b,
    "div": division = (a, b) => a / b
}

const mathOperations = (a, b) => {
    let add = allOperations.add(a, b)
    let sub = allOperations.sub(a, b)
    let mult = allOperations.mult(a, b)
    let div = allOperations.div(a, b)
    console.log(`
        addition = ${add},
        subtraction = ${sub},
        multiplication = ${mult},
        division = ${div}
    `)
}

//test
mathOperations(2, 2)
