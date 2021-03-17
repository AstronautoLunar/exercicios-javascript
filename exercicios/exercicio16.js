const calculadoraBasica = function (numero1, numero2, operacao) {
    switch(operacao) {
        case "+":
            return `${numero1} + ${numero2} = ${numero1+numero2}`;
            break;
        case "-":
            return `${numero1} - ${numero2} = ${numero1-numero2}`;
            break;
        case "*":
            return `${numero1} * ${numero2} = ${numero1*numero2}`;
            break;
        case "/":
            return `${numero1} / ${numero2} = ${numero1/numero2}`
            break;
        default:
            return "Operação invalida, " + operacao;
    }
}

console.log(calculadoraBasica(2,2, "+"));
console.log(calculadoraBasica(2,2, "-"));
console.log(calculadoraBasica(2,2, "*"));
console.log(calculadoraBasica(2,2, "/"));
console.log(calculadoraBasica(2,2, "nao sei"));