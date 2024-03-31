//Faça uma estrutura if/else para verificar se um usuário pode dirigir
//Armazene em variáveis algumas informações sobre o usuário: idade, se tem CNH
//Se a idade for maior que 18 e não possuir CNH, exiba uma mensagem
//Se a idade for maior que 18 e tem CNH, exiba uma mensagem
//Se não tiver 18 nem CNH, exiba outra mensagem

const age = 15
const document = false


if (age < 18){
    console.log("Você é menor de idade e, por isso, não é habilitado.")
}

else{
    
    if (document === true){
        console.log("Você é maior de idade e habilitado")}

    else{
        console.log("VOcê é maior de idade mas não é habilitado")
    }
}