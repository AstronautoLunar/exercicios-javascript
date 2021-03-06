
const arredondarDinheiro = function(real) {
    return `R$${real - 0.00000000000000004}`
}

console.log(arredondarDinheiro(0.10 + 0.20));