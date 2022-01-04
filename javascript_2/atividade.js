function verificacao(valor1, valor2) {
    let soma;
    if(valor1 == valor2){
        soma = valor1 + valor2
        if(soma > 10 || soma < 20){
            return alert(`Os numeros ${valor1} e ${valor2} são iguais, A sua soma é ${soma}. que é maior que 10 e menor que 20` )
        } else {
            return alert(`Os numeros ${valor1} e ${valor2} são iguais, A sua soma é ${soma}. que é maior que 10 e maior que 20` )
        }
    } else {
        soma = valor1 + valor2
        if(soma > 10 && soma < 20){
            return alert(`Os numeros ${valor1} e ${valor2} não são iguais, A sua soma é ${soma}. que é maior que 10 e menor que 20` )
        }  else {
            return alert(`Os numeros ${valor1} e ${valor2} não são iguais, A sua soma é ${soma}. que é maior que 10 e maior que 20` )
        }
    }
}

let valor = Number(prompt("Informe o Numero: "))
let valor1 = Number(prompt("Informe o Numero: "))

verificacao(valor, valor1)