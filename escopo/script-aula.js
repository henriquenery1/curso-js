function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
   }
   mostrarCarro(); // Fusca no console
   console.log(carro); // Erro, carro is not defined

   function mostrarCarro() {
    carro = 'Fusca';
    console.log(carro);
   }
   mostrarCarro(); // Fusca
   console.log(carro); // Fusca
   //'use strict' impede isso.

   var carro = 'Fusca';
function mostrarCarro() {
 var frase = `Meu carro é um ${carro}`;
 console.log(frase);
}
mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca

if(true) {
    var carro = 'Fusca';
    console.log(carro);
   }
   console.log(carro); // Carro
   
   if(true) {
    const carro = 'Fusca';
    console.log(carro);
   }
   console.log(carro); // erro, carro is not defined

{
    var carro = 'Fusca';
    const ano = 2018;
}
   console.log(carro); // Carro
   console.log(ano); // erro ano is not defined

for(let i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
   }
   console.log(i); // i is not defined

const mes = 'Dezembro';
   mes = 'Janeiro'; // erro, tentou modificar o valor
   const semana; // erro, declarou sem valor
   const data = {
    dia: 28,
    mes: 'Dezembro',
    ano: 2018,
   }
   data.dia = 29; // Funciona
   data = 'Janeiro'; // erro
   
let ano;
   ano = 2018;
   ano++;
   console.log(ano); // 2019
   let ano = 2020; // erro, redeclarou a variável

