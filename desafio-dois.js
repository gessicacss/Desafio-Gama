    function desafio () {
         const numeroa = prompt('Digite o primeiro número', '');
         const operador = prompt('Coloque o símbolo do operador que quer utilizar', '');
         const numerob = prompt('Digite o segundo número', '');
         operador === + || / || * || -;
         calcular(numeroa, numerob, operador);
    }
    function calcular(numeroa, numerob, operador) {
        let calculo = 0;
        switch (operador){
            case "-":
            calculo = numeroa - numerob;
             break;
            case "+":
                calculo = numeroa + numerob;
             break;
            case "*":
                calculo = numeroa * numerob;
              break;
            case "/":
                calculo = numeroa / numerob;
                break;
            default:
                console.log('Operador inválido')
        }
        return calculo;
}

desafio();
