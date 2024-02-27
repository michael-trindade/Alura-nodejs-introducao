const notaFinal = 6;
const faltas = 2;
const advertencias = 0;

//if (notaFinal < 7 || faltas > 4) {        // || OR -> operador lógico
if (notaFinal < 7 && faltas > 4) {          // && AND -> operador lógico
    console.log('reprovado, boas festas');
} else {
    console.log('não foi reprovado por falta');
}

if (faltas >= 2 && !advertencias) {  // ! -> operador negação, neste caso nega false e retorna true
    console.log('recebeu bônus');
} else {
    console.log('não recebeu bônus');
}
