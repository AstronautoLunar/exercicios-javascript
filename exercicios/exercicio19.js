const cardapioCalcular = function (codigo, quantidade) {
    switch(codigo) {
        case 100:
            return `${(3.00*quantidade).toFixed(2)};`
            break;
        case 200:
            return `${(4.00*quantidade).toFixed(2)};`
            break;
        case 300:
            return `${(5.50*quantidade).toFixed(2)};`
            break;
        case 400:
            return `${(7.50*quantidade).toFixed(2)};`
            break;
        case 500:
            return `${(3.50*quantidade).toFixed(2)};`
            break;
        case 600:
            return `${(2.80*quantidade).toFixed(2)};`
            break;
        default:
            return "Produto não existente";
    }
}

console.log(cardapioCalcular(100,2));
console.log(cardapioCalcular(200,2));
console.log(cardapioCalcular(300,2));
console.log(cardapioCalcular(400,2));
console.log(cardapioCalcular(600,2));