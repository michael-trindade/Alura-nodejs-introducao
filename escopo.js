let estudante;  // Let permite alterar valor

if (1 > 0) {                            // Escopo de bloco, dentro das chaves
    //var estudante = 'Caroline';       // Var permite alterar valor
    //let estudante = 'Caroline';
    estudante = 'Caroline';
    console.log(estudante);
}

//estudante = 'Ana';      // Variavel sem tipo declarado é declarado como var por padrao no js
                        // Variavel com mesmo nome mas sendo var é considerado outra variavel
                        //Escopo global

console.log(estudante);