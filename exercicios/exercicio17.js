const calcularNovoSalario = function (plano, salario) {
    switch(plano) {
        case "A":
            return ((10/100)*salario)+salario;
            break;
        case "B":
            return ((15/100)*salario)+salario;
            break;
        case "C":
            return ((20/100)*salario)+salario;
            break;
        default:
            return "Operação invalida"
    }
}

console.log(calcularNovoSalario("A", 2000));
console.log(calcularNovoSalario("B", 2000));
console.log(calcularNovoSalario("C", 2000));