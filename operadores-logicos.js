const notaFinal = 6;
const faltas = 5;

//if (notaFinal < 7 || faltas > 4) {        // || OR -> operador lógico
if (notaFinal < 7 && faltas > 4) {          // && AND -> operador lógico
    console.log('reprovado, boas festas');
} else {
    console.log('não foi reprovado por falta');
}