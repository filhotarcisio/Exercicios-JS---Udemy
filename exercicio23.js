//Escreva uma função que recebe uma string
//Se o texto conter mais de 10 caracteres imprima "Texto muito longo"
//Se conter menos, imprima "Texto dentro do limite"


function tamanho (string){
    if (string.length > 10){
        console.log("Texto muito longo")
    }
    else{
        console.log("Texto dentro do limite")
    }
    console.log(string.length)
}


tamanho ("Teste")
tamanho("Vamos testar se funciona")
tamanho("10-")