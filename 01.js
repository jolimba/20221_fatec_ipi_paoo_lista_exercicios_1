// 1. Escreva funções que implementam as quatro operações aritméticas. Todas elas devem
// receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva
// operação. Faça a implementação usando a palavra function para todas elas.

function addition(a, b) { return a + b }

function subtraction(a, b) { return a - b }

function multiplication(a, b) { return a * b }

function division(a, b) { return a / b }

function mathOperations (a, b) {
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