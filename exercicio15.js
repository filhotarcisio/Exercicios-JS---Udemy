//Verifique se o número é primo
//Um número primo, é um número natural, maior que 1 e apenas divisível por si próprio e por 1

const number = 10
let divisor = 0

for (let i = 0; i <= number; i++){
    if(number % i === 0){
        divisor++
    }
}

divisor === 2 ? console.log(`${number} e um número primo`) : console.log(`${number} não é um número primo`)