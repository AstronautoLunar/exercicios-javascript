const calcularJurosMes = function (mes) {
    let juros = 0;
    switch(mes) {
        case 1:
            return `É Janeiro e vai paga ${juros+5}% de juros`;
            break;
        case 2:
            return `É Fevereiro e vai paga ${juros+10}% de juros`;
            break;
        case 3:
            return `É Março e vai paga ${juros+15}% de juros`;
            break;
        case 4:
            return `É abril e vai paga ${juros+20}% de juros`;
            break;
        case 5:
            return `É maio e vai paga ${juros+25}% de juros`;
            break;
        case 6:
            return `É junho e vai paga ${juros+30}% de juros`;
            break;
        case 7:
            return `É julho e vai paga ${juros+35}% de juros`;
            break;
        case 8:
            return `É agosto e vai paga ${juros+40}% de juros`;
            break;
        case 9:
            return `É setembro e vai paga ${juros+45}% de juros`;
            break;
        case 10:
            return `É outubro e vai paga ${juros+50}% de juros`;
            break;
        case 11:
            return `É novembro e vai paga ${juros+55}% de juros`;
            break;
        case 12:
            return `É dezembro e vai paga ${juros+55}% de juros`;
            break;
        default:
            return "data do mês invalida";
    }
}

console.log(calcularJurosMes(5));