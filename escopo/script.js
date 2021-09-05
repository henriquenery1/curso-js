//Exercício

// Por qual motivo o código abaixo retorna com erros?
{
 var cor = 'preto';
 const marca = 'Fiat';
 let portas = 4;
}
//console.log(cor, marca, portas);
/*
Variáveis criadas com var , vazam o bloco. A melhor forma de declarmos uma variável é utilizando const e let , pois estas respeitam o escopo de bloco. Por isso o erro, const e let n vazam o bloco
*/

// Como corrigir o erro abaixo?
function somarDois(x) {
 let dois = 2;
 return x + dois;
}
function dividirDois(x) {
 let dois = 2;
 return x / dois;
}
somarDois(4);
dividirDois(6);
//Trocar const por let 

// O que fazer para total retornar 500?
const numero = 50;
for(let numero = 0; numero < 10; numero++) {
 console.log(numero);
}
const total = 10 * numero;
console.log(total);