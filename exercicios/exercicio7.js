let valores = {
    a: 2,
    b: -10,
    c: 8,
}

const bhaskaraCalcular = function (valores) {
    let delta = (valores.b**2)-(4*valores.a*valores.c);
    if(delta >= 0) {
        console.log("Delta é positivo!");
        let xPositivo = (-valores.b + Math.sqrt(delta))/2*valores.a
        console.log(`X positivo: ${xPositivo}`);
        let xNegativo = (-valores.b - Math.sqrt(delta))/2*valores.a
        console.log(`X negativo: ${xNegativo}`);
    } else {
        console.log("Delta é negativo")
    }
}

bhaskaraCalcular(valores);

//Deu errado e não consegui solucionar