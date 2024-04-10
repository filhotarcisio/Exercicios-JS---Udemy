//Escreva uma função que recebe a idade de uma pessoa
//Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima uma mensagem informando isso
//Se ela tem menos, ela não pode, imprima outra mensagem com este aviso
//Excute a função nos dois casos


function driverLicense (age){
    age >= 18 ? console.log(`Você tem ${age} anos e, por isso, pode entrar na autoescola`) 
    : console.log(`Você tem ${age} anos e, por isso, não pode entrar na autoescola`) 
}

driverLicense(18)