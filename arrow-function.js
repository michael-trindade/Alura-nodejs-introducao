// Arrow Function tambem é expressão de função
const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

// É utilizado dentro das funções, função dentro de função - Callback Functions
// Tambem é utilizado em objetos
const exibeNome = (nome) => nome;

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));
console.log(exibeNome('Caroline'));