const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);

const comida = 'Pizza';
const frase = 'A melhor comida';
comida.length; // 5
frase.length; // 15
comida[0] // P
frase[0] // A
frase[frase.length - 1] // a

const linguagem = 'JavaScript';
linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';
const fraseCompleta = frase.concat(linguagem, '!!');

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';
listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

const fruta = 'Banana';
fruta.endsWith('nana'); // true
fruta.startsWith('Ba'); // true
fruta.startsWith('na'); // false

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';
transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax
transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

const linguagem = 'JavaScript';
linguagem.substring(3,5); // aS
linguagem.substring(0,4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript

const instrumento = 'Guitarra';
instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
listaPrecos.forEach((preco) => {
 console.log(preco.padStart(10, '.'));
})
listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.'); // R$ 99.....

const frase = 'Ta';
frase.repeat(5); // TaTaTaTaTa

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos
Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

const listaItens = 'Camisas Bonés Calças Bermudas Vestidos
Saias';
const arrayItens = listaItens.split(' ');
const htmlText = '<div>O melhor item</div><div>A melhor
lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';
(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true

const valor = ' R$ 23.00 '
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00 '
valor.trimEnd(); // ' R$ 23.00'

