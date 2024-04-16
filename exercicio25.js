//Escreva uma função que recebe um número e o decrementa de 1 em 1 com um loop
//Além disso, imprima somente os números pares no console

function decrement (number) {
    for (let i = 0; i <= number; i++){
        if((number - i) % 2 === 0){
            console.log(number - i)
        }
    }
}
decrement(50)