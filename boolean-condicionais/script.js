// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual
var mi = 22
var pi = 40
if  (mi > pi) {
    console.log ('É maior');
}
else if (mi === pi) {
    console.log ('É igual')
}
else {
    console.log('É menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log (expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
console.log(!!nome)
var idade = 28;
console.log(!!idade)
var possuiDoutorado = false;
console.log(!!possuiDoutorado)
var empregoFuturo;
console.log(!!empregoFuturo)
var dinheiroNaConta = 0;
console.log(!!dinheiroNaConta)

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
   } else {
    console.log('Falso');
   }

   // O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
   } else {
    console.log('Falso');
   }
   