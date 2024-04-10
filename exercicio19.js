//Escreva uma função que retorne um número aleatório
//O número máximo retornado deve ser passado via parâmetro
//Dica: Utilize Math.random()

function random (number){
    return Math.floor(Math.random() * number) + 1;
}

console.log(random(10))