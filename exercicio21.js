//Escreva uma função que detecta o tipo de dado passado
//Verifique se é um number, boolean ou string e retorne uma mensagem para cada tipo
//Execute uma função para cada caso

let variable = "5 > 4"

function type (data){
    
    if (typeof data === "string" ){
        console.log("Este dado é uma string")
    } 
    else if (typeof data === "number"){
        console.log("Este dado é um number")
    } 
    else if (typeof data === "boolean"){
        console.log("Este dado é um boolean")
    }
     
}

type (variable)