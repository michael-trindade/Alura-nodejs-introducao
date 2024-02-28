// parâmetros/argumentos
// retorno
console.log(exibeInfosEstudante('Caroline', 10)); // Pode executar antes da função
console.log(exibeInfosEstudante('Ana', 7));

function exibeInfosEstudante(nome, nota) {      // Declaração de Função
    return `o nome é ${nome} e a nota é ${nota}`;
}

// hoisting - içar