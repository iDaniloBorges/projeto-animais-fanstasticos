// Prototype 1

function Pessoa2(nome, idade) { //Função
    this.nome = nome
    this.idade = idade
    this.abracar = function(){
        return 'Abraçou'
    }
    this.andar = function(){    //Primeiro é procurado dentro da função, e só depois no protótipo
        return 'Andou pelo objeto'
    }
}

Pessoa2.prototype.andar = function(){
    return this.nome + ' pessoa andou'
}
Pessoa2.prototype.nadar = function(){
    return this.nome + ' pessoa nadou'
}

const dan = new Pessoa2('Dan', 29)  //Objeto

console.log(Pessoa2.prototype)
console.log(dan.prototype) //Prototype só se aplica a funções, e não a objetos

// Prototype 2

const pais= 'Brasil'
const cidade = new String('Rio')

const listaAnimais = ['Dog', 'Gato', 'Pé de pano']

const lista = document.querySelectorAll('li')

const listaArray1 = Array.prototype.slice.call(lista)    //Transformando nodeList em Array
const listaArray2 = Array.from(lista)    //Transformando nodeList em Array

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar(){
        return true
    }
}

// Prototype 3

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa3 (nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    console.log(nome + ' ' + sobrenome + ' ' + idade + ' anos')
}
Pessoa3.prototype.nomeCompleto = function(){
    return (`${this.nome} ${this.sobrenome}`)
}
const bdan = new Pessoa3('Danilo', 'Borges Santos', 29)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
console.log(li)

li; //HTMLLIElement
li.click;   //Function
li.innerText;   //String
li.value;   //number
li.hidden;  //Boolean
li.offsetLeft;  //number
li.click(); //undefinied


// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //string


//0403 Native, Host e User 1

console.log(typeof Array.fromdfd !== "undefined")

if(typeof Array.fromdfd !== "undefined"){
    console.log('Existe')
} else {
    console.log('Não existe')
}

// Liste 5 objetos nativos
Object
String
Array
Number
Boolean
Function

// Liste 5 objetos do browser
Window
history
Document
HTMLAllCollection
NodeList

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if(typeof document.webkitHidden !== "undefined"){
    console.log('Existe')
} else {
    console.log('Não Existe')
}

if(typeof document.webkitVisibilityState !== "undefined"){
    console.log('Existe')
} else {
    console.log('Não Existe')
}

// String 1

const comida = 'Pizza'
const agua = new String('Agua ')

console.log(agua.length)

const frase = 'A melhor comida'

console.log(frase[frase.length-1])
console.log(frase.charAt(frase.length) + 'não deu nada')


const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

// const fraseFinal = frase + linguagem
const fraseFinal = frase.concat(linguagem, '!!!', ' yasmin??', ' yasmintira!!!!')

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta, 14))

console.log(fruta.endsWith('na'))



const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao3.slice(0, -4)); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

console.log(fruta.indexOf('n'))
console.log(fruta.lastIndexOf('n'))

const preco = 'R$ 99,00'
const Listaprecos = ['R$99,00', 'R$199', 'R$1200']

Listaprecos.forEach((item)=>{
    console.log(item.padStart(15,'-'))
})

// console.log(preco.padStart(30, '-'))
// console.log(preco.padEnd(20, '-'))

// String 2  0404

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

// listaItens = listaItens.replace(' ', ',')

const arrayLista = listaItens.split(', ')
console.log(arrayLista)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
const htmlArray = htmlText.split('div')
// const novoHtml = html

console.log(htmlText)
console.log(htmlArray)

const frutasArray = ['Banana', 'Melancia', 'Laranja']


// String 3  0405

 // Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];  
  
  let taxaTotal = 0
  transacoes.forEach((item)=>{
    if(item.descricao.slice(0, 4) === 'Taxa'){
      const valores = Number(item.valor.substring(3))
      taxaTotal += valores
      }
    })
    console.log(`R$ ${taxaTotal}`)
    
    let recebimentoToal = 0
    transacoes.forEach((item)=>{
      if(item.descricao.slice(0, 11) === 'Recebimento'){
        const valores = Number(item.valor.substring(3))
        recebimentoToal += valores
      }
    })
    console.log(`R$ ${recebimentoToal}`)
    


  
  // Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';')
console.log(arrayTransportes) 


// Substitua todos os span's por a's
const html = `<ul>
<li><span>Sobre</span></li>
<li><span>Produtos</span></li>
<li><span>Contato</span></li>
</ul>`;

html2 = html.replace(/[span]+/g, 'a')
console.log(html2)
// const html2 = html.split.apply('psna').join('a')
  
  // // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  // console.log(frase.length)

  console.log(frase[frase.length-1])
  console.log(frase.slice(-1))
  
  // // Retorne o total de taxas
  const transacoes3 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  itemCount = 0
  transacoes3.forEach((item)=>{
    item = item.toLowerCase()
    item = item.trim()
    console.log(item.slice(0,4))
    if(item.slice(0,4) === 'taxa'){
      itemCount ++
    }
  })
  console.log(`Há ${itemCount} taxas.`)
  
// Number e math 0404

console.log(Number.isNaN(true))
console.log(Number.isInteger(1))
console.log(Number.parseFloat('  125,58'))
console.log(Number.parseFloat('5988,58 reais'))
console.log(Number.parseInt('5000.58 reais'))

const preco = 2.99
console.log(Number(preco.toFixed(3))+10)

// const preco2 = '2.99'

console.log(preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

console.log(Math.PI)
console.log(Math.E)
console.log(Math.abs(2-6))
console.log(Math.ceil(4.7))
console.log(Math.floor(4.7))
console.log(Math.round(4.7))
console.log(Math.round(4.4))


console.log(Math.max(4, 45, 100, 2, 15))
console.log(Math.min(4, 45, 100, 2, 15))


console.log(Math.random()*100)

console.log(Math.random()* (70 - 40 +1)) + 40


// console.log(Math.random()* (max - min +1)) + min

// Number e math 2 0405

// Retorne um número aleatório
// entre 1050 e 2000

const min = 1050
const max = 2000
const num = Math.floor(Math.random() * (max - min + 1) + min)
console.log(num)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros  = numeros.split(', ')
const numeroMax = Math.max(...arrayNumeros) //...Passa por todos os números

console.log(numeroMax)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];


function limparPreco(preco){
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
  preco = +preco.toFixed(2)
  return preco
  // console.log(`R$ ${preco}`)
}
let soma = 0
listaPrecos.forEach((item)=>{
  soma += limparPreco(item)
})
console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))


// Array 1  0406

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const carros = new Array('Corola', 'Mustang', 'Honda');
// const carros = new Array('Ford', 'Fiat', 'Honda')

// carros[1] // Mustang
// carros[2] = 'Ferrari';
// carros[10] = 'Parati';
// carros[20] = 'Parati';
// carros.length; // 11

// console.log(carros)

const li = document.querySelectorAll('li')
const arrayLi = Array.from(li)

const obj = {
  0: 'Andre',
  1: 'Auau',
  2: 'pan',
  length: 4,
}

const objArray = Array.from(obj)

console.log(li)
console.log(arrayLi)

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

console.log(frutas[2].length); // 6
frutas[1].length; // 4
frutas[2].length; // 2

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort()

const idades = [32,21,33,43,1,12,8];
console.log(idades.sort())

// Array 3 0406

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const comidas1 = comidas.shift(0)
console.log(comidas1)

// Remova o último valor de comidas e coloque em uma variável

const comidas2 = comidas.pop()
console.log(comidas2)

// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
console.log(comidas)

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Pexei', 'Batata')
// console.log(comidas)


// Arrume os estudantes em ordem alfabética
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
estudantes.sort()
// console.log(estudantes)

// Inverta a ordem dos estudantes
estudantes.reverse()
console.log(estudantes)

// Verifique se Joana faz parte dos estudantes
const joana = estudantes.includes('Joana')
console.log(joana)

// Verifique se Juliana faz parte dos estudantes
const juliana = estudantes.includes('Juliana')
console.log(juliana)

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li')
// html = html.join('ul')

// html = html.split('div')
// html = html.join('li')

console.log(html)


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosOriginal = carros.slice()
carros.pop()

console.log(carrosOriginal)
console.log(carros)



// Array e iteração 1 0407

const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach((item, index, array) =>{
  array[index] = 'teste'
  console.log(item, index, array);
})
console.log(carros);


//

const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));
li.forEach((item, index) => {item.classList.add('ativa'+index)});

li.forEach(function(item) {
  item.classList.add('ativa');
});



// MAP

const carros = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros.map((item, index, array) =>{
  return item.toUpperCase()
})

const numeros = [2, 4, 5, 6, 78]
const numerosx2 = numeros.map(n => n*2)
console.log(numerosx2)

// console.log(novaArray[1] = 'teste')
console.log(novaArray)
console.log(carros)



//

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min)

// const nomeAulas = function (aula){
//   return aula.nome
// }

const nomeAulas = aula => aula.nome //Forma mais comum de ser utilizado

const arrayNomeAulas = aulas.map(nomeAulas)

console.log(arrayNomeAulas)
console.log(tempoAulas)


// reduce()
const aulas = [10, 25, 30];

const reduceAulas = aulas.reduce((acumulador, item, index, array)=>{
  console.log(acumulador, item, index)
  return item + acumulador
}, 100)

console.log('----------------')


const numeros = [10,25,30,3,54,33,22]

const maiorNum = numeros.reduce((anterior, atual)=>{
  return anterior > atual ? anterior : atual

//   if(anterior > atual)
//     return anterior
//   else
//   return atual
}, 0)

console.log(maiorNum)




const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

var acumulador= {}

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})


// some()

const frutas = ['Banana', '', 'Pêra', 'Uva'];

const temuVA = frutas.some((item)=>{
  console.log(item)
  return item === 'Uva'
})

console.log(temuVA)

console.log('-------')

// every()

const every = frutas.every((fruta)=>{
  console.log(fruta)
  return fruta
})

console.log(every)

const numeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every(num => num >= 7)

console.log(maiorQue3)

// find() e findindex()

const frutas = ['', 'Banana', 'Pêra', 'Uva', 'Maçã'];

const indexUva = frutas.findIndex(item => {
  return item === 'Uva'
})

// console.log(indexUva)


// filter()

const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayFrutas = frutas1.filter((item) => {
  console.log(item)
  return item
})

console.log(arrayFrutas)


// filter em objetos
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const maiores15 = aulas.filter((aula) =>{
  console.log(aula.min)
  return aula.min >= 15
})
console.log(maiores15)
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]


// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
console.log(cursos[0])
const arrayCursos = Array.from(cursos)
console.log(arrayCursos)

const newCursos = arrayCursos.map((curso) =>{
  const titulo = curso.querySelector('h1').innerText
  const descricao = curso.querySelector('p').innerText
  const aulas = curso.querySelector('.aulas').innerText
  const horas = curso.querySelector('.horas').innerText
  return{
    titulo,  
    descricao,
    aulas,
    horas,    
  }
})
console.log(newCursos)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosMaiores = numeros.filter((item)=>{
  console.log(item)
  return item > 100
})
console.log(numerosMaiores)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

if(instrumentos.includes('Baixo')){
    console.log(true) 
  }

const temBaixo = instrumentos.some((item) =>{
  return item === 'Baixo'
})
console.log(temBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

let total = 0

// compras = compras.replace(',', '.')

const valorTotal = compras.map((item) =>{
  total += Number(item.preco.substring(3).replace(',', '.'))
})
console.log(total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}))

let total2 = 0
const valorTotal2 = compras.reduce((acumulador, item) =>{
  const precoLimpo = +item.preco.replace('R$', '').replace(',', '.')
  return acumulador += precoLimpo
  // console.log(precoLimpo)
}, 0)
console.log(valorTotal2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}))





// Function 1 0408


const perimetro = new Function('lado', 'return lado *4')

function somar(n1, n2){
  return n1 +n2 + ''
}

console.log(somar.name.toUpperCase())

function darOi(nome, idade){
  console.log('oi pra vc ' + nome + ' ' + idade)
}

darOi.call([], 'dan', 29)


// function.call()

const carro = {
  marca: 'Ford',
  ano: 2018
}

window.marca = 'Carro'
window.ano =288

function descricaoCarro() {
  console.log(this)
  console.log(this.marca + ' ' + this.ano);
}
descricaoCarro.call({marca: 'Honda', ano: '2015'})



const carros = ['Ford', 'Fiat', 'VW']

const frutas = ['Banana', 'Pêra', 'Uva']

carros.forEach.call(frutas, (item) => {
  console.log(item)
})



// this

function Dom(seletor){
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe){
  console.log(this)
  this.element.classList.add(classe)
}

const ul = new Dom('ul')

const li = {
  element: document.querySelector('li')
}

ul.ativo.call(li, 'ativar')
ul.ativo('ativar')

console.log(ul)


const numeros = [1, 2, 3]
const newNumeros = numeros.map( n => n*2)
console.log(newNumeros)


const idades = [12, 18, 25, 16]
const maiores = idades.filter(n => n >= 18)
console.log(maiores)

function falarAlgo(callback) {
  console.log("Antes de chamar o callback...");
  callback(); // aqui ela é executada
  console.log("Depois do callback.");
}

falarAlgo(function () {
  console.log("Sou o callback!");
});


setTimeout(() => {
  console.log("Executou depois de 5 segundo");
}, 5000);

console.log("Antes");
setTimeout(() => console.log("Depois de 1s"), 1000);
console.log("Depois");


console.log("Começando a contagem...");

setTimeout(() => {
  console.log("3 segundos se passaram!");
}, 3000);

console.log("Essa mensagem aparece antes do tempo acabar.");


const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro = {
  rodas: 4,
  mala: true,
}

console.log(Object.assign(moto, funcaoAutomovel))
console.log(Object.assign(carro, funcaoAutomovel))





const pessoa = { nome: "Joana", idade: 28 };

// Altere a idade da pessoa para 30
// Tente depois reatribuir o objeto inteiro

// código aqui...

pessoa.idade = 30

console.log(pessoa);


const ternario = function(valor){ 
  return valor > 10 ? 'Sim': 'Não'}

console.log(ternario(11))


const frutas = ["maçã", "banana", "laranja"];

for (const fruta of frutas) {
  console.log(fruta);
}



// setTimeout e setInterval

function espera(texto) {
    console.log(texto);
  }
  setTimeout(espera, 5000, 'Depois de 1s');

  setTimeout (() => {
    console.log('1, 2, 3, TESTANDO.')
  }, 3000)

  for(let i = 0; i <20 ; i++){
    setTimeout(()=>{
        console.log(i)
    }, 200 * i)
  }
  

const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(event) {
  setTimeout(() =>{
    this.classList.toggle('active');
  }, 1000)
}
// Erro pois window.classList não existe



