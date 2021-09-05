var dados = {
    nome: 'Henrique',
    sobre: 'Nery',
    idade: 22,
    nomeCompleto: function () {
        return `${dados.nome} ${this.sobre}`;
    }
}

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = 3000;

var cacho = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa === 'homem') {
            return 'Latir';
        }
        else {
            return 'Nada';
        }
    }
}