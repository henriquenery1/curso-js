var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    }
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

var menu = {
    height: 50,
    background: '#84E',
    metadeHeight() {
        return this.height / 2;
    }
}