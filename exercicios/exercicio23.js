const aluno = {
    codigo: 4444,
    nota1: 7.5,
    nota2: 6,
    nota3: 7,
}

const mediaPonderadaCalcular = function (aluno) {
    console.log(`--------------`);
    console.log(`Código: ${aluno.codigo}`);
    console.log(`Nota 1: ${aluno.nota1}`);
    console.log(`Nota 2: ${aluno.nota2}`);
    console.log(`Nota 3: ${aluno.nota3}`);
    if(aluno.nota1 > aluno.nota2 && aluno.nota1 > aluno.nota3) {
        aluno.nota1*=4;
        aluno.nota2*=3;
        aluno.nota3*=3;
    } else if (aluno.nota2 > aluno.nota1 && aluno.nota2 > aluno.nota3) {
        aluno.nota1*=3;
        aluno.nota2*=4;
        aluno.nota3*=3;
    } else {
        aluno.nota1*=3;
        aluno.nota2*=3;
        aluno.nota3*=4;
    }
    let mediaTotal = (aluno.nota1+aluno.nota2+aluno.nota3)/10;
    console.log(`Média total: ${mediaTotal}`);
    if(mediaTotal >= 5) {
        console.log("APROVADO");
    } else {
        console.log("REPROVADO");
    }
    console.log(`--------------`);
}

mediaPonderadaCalcular(aluno);