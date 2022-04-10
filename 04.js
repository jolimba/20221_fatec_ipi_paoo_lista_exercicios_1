// 4. Escreva um script que apresenta as seguintes operações para o usuário:
// 1- Soma
// 2- Subtração
// 3- Multiplicação
// 4- Divisão
// 5- Sair
// O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
// inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
// o objeto JSON do exercício 3 para realizar as operações aritméticas.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const allOperations = {
    "add": addition = (a, b) => a + b,
    "sub": subtraction = (a, b) =>  a - b,
    "mult": multiplication =(a, b) => a * b,
    "div": division = (a, b) => a / b
}

const mathOperations = (a, b) => {
    readline.question(`Choose one: 
            1- addition
            2- subtraction
            3- multiplication
            4- division
            5- exit \n`, 
        choice => {
            switch(parseInt(choice)) {
                case 1:
                    console.log("Result: " + allOperations.add(a, b))
                    mathOperations(a, b)
                    break;
                case 2:
                    console.log("Result: " + allOperations.sub(a, b))
                    mathOperations(a, b)
                    break;
                case 3:
                    console.log("Result: " + allOperations.mult(a, b))
                    mathOperations(a, b)
                    break;
                case 4:
                    console.log("Result: " + allOperations.div(a, b))
                    mathOperations(a, b)
                    break;
                case 5:
                    console.log("告別")
                    readline.close();
                    break;
                default:
                    console.log("An error has occurred, please try again")
                    mathOperations(a, b)
            }
        }
    )
}

readline.question("First number: ", num1 =>{
    readline.question("Second number: ", num2 => {
        mathOperations(parseInt(num1), parseInt(num2))
    })
})