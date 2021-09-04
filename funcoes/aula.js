function areaQuadrado(lado) {
    return lado * lado;
   }
   areaQuadrado(4) // 16
   areaQuadrado(5) // 25
   areaQuadrado(2) // 4

function pi() {
    return 3.14;
   }
   var total = 5 * pi(); // 15.7

function imc (peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.80));

function corFav (cor) {
    if (cor === 'azul') {
        return 'Eu gosto do céu';
    }
    else if (cor === 'verde') {
        return ('Eu gosto de mato')
    }
    else {
        return 'Não gosto de cores'
    }
}

addEventListener('click', function(){
    console.log('oi')
});

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
   }
   imc(80, 1.80); // retorna o imc
   console.log(imc(80, 1.80)); // retorna o imc e undefined

   function terceiraIdade (idade) {
       console.log(typeof idade);
       if (typeof idade !== 'number') {
           return 'Insira um número'
       }
     if (idade >= 60) {
         return true;
     }
     else {
         return false;
     }
   }
   console.log(terceiraIdade(60))

   function paises(pv) {
     var tp = 193;
     return `Falta visitar ${paises - pv} países`;
   }
   console.log(totalPaises); // erro, totalPaises não definido

function dados () {
    var nome = 'André';
    var idade = 28;
    function outrosDados () {
        var endereço = 'RJ';
        var idade = 30;
        return `${nome}, ${idade}, ${endereço}`;
    }
}

imc(80, 1.80); // imc aparece no console
function imc(peso, altura) {
 const imc = peso / (altura ** 2);
 console.log(imc);
}