var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

var idade = 19;
var diabetes = true;
var podeBeber = (idade >= 18 && !diabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber
// condição ? true : false

var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');
// ou
if(possuiFaculdade)
 console.log('Possui faculdade');
else
 console.log('Não possui faculdade');
