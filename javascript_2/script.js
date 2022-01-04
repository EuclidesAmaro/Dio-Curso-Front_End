

function calculadora() {
    const operacao = Number(prompt("Escolha uma Operação: \n 1 - Soma (+)\n 2 - Subtração (-) \n 3 - Multiplição (*)\n 4 - Divisão real(/) \n 5 - Divisão inteira (%)\n 6 - Potenciação(**) "));
    console.log(operacao)

    if(!operacao || operacao > 6){
        alert('Erro - Operação Invalida ')
    } else {

        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if(!n1 || !n2){
            alert('Erro - Parâmentro invalido')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao()
            }
    
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao()
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao()
            }
            function divisao() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao()
            }
            function divisaoInteiro() {
                resultado = n1 % n2;
                alert(`Resultado do resto da divisão ${n1} % ${n2} = ${resultado}`)
                novaOperacao()
            }
            function potenciacao() {
                resutado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`)
                novaOperacao()
            }
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra Operação?\n  1 - Sim \n 2 - Não ')
            if(opcao == 1){
               calculadora()
            } else if (opcao == 2) {
                 alert('Até mais!!!');
            } else {
                alert("Digite uma opcão Valida que seja 1 ou 2 ")
                calculadora()
            }
        }

        if(operacao == 1){
            soma()
        } else if (operacao == 2) {
            subtracao()
        } else if (operacao == 3) {
            multiplicacao()
        } else if (operacao == 4) {
            divisao()
        } else if (operacao == 5) {
            divisaoInteiro()
        } else if (operacao == 6) {
            potenciacao()
        } else {
            alert('Operação invalida!!!')
        }
    }
}

calculadora()
 