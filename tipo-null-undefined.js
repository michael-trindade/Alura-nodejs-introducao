let nomeEstudante;
const professora = 'Ana';

//console.log(nomeEstudante);     // undefined variavel não definida
console.log(typeof nomeEstudante);     // undefined variavel não definida, bom para debugar
console.log(typeof professora);     // undefined variavel não definida, variavel não foi utilizada

let telefoneEstudante = null;
//console.log(telefoneEstudante);     // não existe valor para a variavel
console.log(typeof telefoneEstudante);     // retorna object, erro do js das antigas versoes

console.log(telefoneEstudante + 3);     //null considera 0 em operação matematica
console.log(nomeEstudante + 3);         //undefined operacao matematica mal formulada retorna NaN