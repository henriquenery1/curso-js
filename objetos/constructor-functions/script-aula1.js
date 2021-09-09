/*
function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
   }
   const honda = new Carro();
   honda.marca = 'Honda';
   honda.preco = 4000;
   const fiat = new Carro();
   fiat.marca = 'Fiat';
   fiat.preco = 3000;

   const honda = new Carro();
// 1 Cria um novo objeto
honda = {};
// 2 Define o protótipo
honda.prototype = Carro.prototype;
// 3 Aponta a variável this para o objeto
this = honda;
// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;
// 5 Retorna o novo objeto
return honda = {
 marca: 'Marca',
};
*/

function carro2 (marca, precoinicial) {
    const taxa = 1.2;
    const precoFinal = precoinicial * taxa
    this.marca = marca;
    this.preco = precoFinal;
}

const mazda = new carro2 ('mazda', 5000);

/*
const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor);
    },
    ativar() {
        this.element().classList.add('ativar');
    }
};

Dom.seletor = 'ul';
Dom.ativar();
*/

function Dom(seletor) {
    this.element = function() {
        return document.querySelector(this.seletor);
    }
    this.ativar = function() {
        this.element().classList.add('ativar');
    }
};

const li = new Dom('li');
const ul = new Dom ('ul');