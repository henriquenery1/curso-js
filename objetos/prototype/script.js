//Exercícios
// Crie uma função construtora de Pessoas. Deve conter nome, sobrenome e idade
function pessoa (nome,sobrenome, idade) {
    this.nome = nome;
    this.sobreNome = sobrenome;
    this.idade = idade;
};

// Crie um método no protótipo que retorne o nome completo da pessoa
pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobreNome}`
}

const henrique = new pessoa ('Henrique', 'Nery', 22);

// Liste os métodos acessados por  dados criados com NodeList, HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
li; //HTMLLIElement
li.click;//function
li.innerText;//string
li.value;//Number
li.hidden;//boolean
li.offsetLeft;//Number
li.click();//undefined


// Qual o construtor do dado abaixo:
li.hidden.constructor.name;//string