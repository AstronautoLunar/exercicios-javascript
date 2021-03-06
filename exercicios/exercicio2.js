
const Triangulo = function (lado1, lado2, lado3) {
    this.lado1 = lado1,
    this.lado2 = lado2,
    this.lado3 = lado3,
    this.qualTipoTriangulo = () => {
        if(this.lado1 == this.lado2 && this.lado1 == this.lado3) {
            console.log("Equilátero");
        } else {
            const lado1DiferenteLado2Lado3 = this.lado1 != this.lado2 && this.lado1 == this.lado3;
            const lado2DiferenteLado3Lado1 = this.lado2 != this.lado3 && this.lado2 == this.lado1;
            const lado3DiferenteLado1Lado2 = this.lado3 != this.lado1 && this.lado3 == this.lado2;
            if(lado1DiferenteLado2Lado3 || lado2DiferenteLado3Lado1 || lado3DiferenteLado1Lado2) {
                console.log("Isósceles");
            } else {
                console.log("Escaleno");
            }
        }
    }
}

const triangulo1 = new Triangulo(5, 5, 5);
const triangulo2 = new Triangulo(5, 6, 5);
const triangulo3 = new Triangulo(5, 6, 7);
triangulo1.qualTipoTriangulo();
triangulo2.qualTipoTriangulo();
triangulo3.qualTipoTriangulo();