const estudanteReprovou = function (notaFinal, faltas) {    // Expressão de Função e é anonima
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

console.log(estudanteReprovou(6, 5));   // Não pode executar antes da função
console.log(estudanteReprovou(10, 2));  