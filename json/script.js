// fetch('./dados.json')
// .then(r => r.json())
// .then(json => {
//     json.forEach(materia => {
//         // const index = 0
//         // const contagem = index += 1
//         console.log(materia.id)
//         console.log(materia.aula)
//         console.log(materia.tempo)
//         console.log('--------')
//     });
// })


// // Transformando .text em .json
// fetch('./dados.json')
// .then(r => r.text())
// .then(jsonText => {
//     const jsonFinal = JSON.parse(jsonText)
//     jsonFinal.forEach(materia =>{
//         console.log(materia.aula)
//         console.log(materia.id)
//         console.log(materia.tempo)
//         console.log('--------')
        
//     })        
// });


// const configuracoes = {
//     player: "Google",
//     tempo: 25.5,
//     aula: "2.1 JavaScript"
// }

// localStorage.config = JSON.stringify(configuracoes) 

// // const stringConfig = JSON.stringify(configuracoes)

// console.log(JSON.parse(localStorage.config))


// fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(r => r.json())
// .then(pokemon =>{
//     console.log(pokemon.name)
// })




// // Método POST para postar/criar
// const url = 'https://jsonplaceholder.typicode.com/posts/'
// const options = {
//     method: 'POST',
//     body: '{"title": "JavaScript"}',
//     headers: {
//         "Content-Type": "application/json; charset=utf-8"
//     }
// }
// fetch(url, options)
// .then(r => r.json())
// .then(json =>{
//     console.log(json)
// })



// // Método PUT para atualizar
// const urlPUT = 'https://jsonplaceholder.typicode.com/posts/2'
// const optionsPUT = {
//     method: 'PUT',
//     body: '{"title": "JavaScript"}',
//     headers: {
//         "Content-Type": "application/json; charset=utf-8"
//     }
// }
// fetch(urlPUT, optionsPUT)
// .then(r => r.json())
// .then(json =>{
//     console.log(json)
// })



// // Método head para puxar apenas os HEADERS
// const urlHEAD = 'https://jsonplaceholder.typicode.com/posts/2'
// const optionsHEAD = {
//     method: 'HEAD',
    
// }
// fetch(urlHEAD, optionsHEAD)
// .then(r => {
//     console.log(r.headers.forEach(console.log))
// })


// ASYNC / AWAIT com try e catch

// async function puxarDados(){
//     try {
//         const rDados = await fetch('./dados.json')
//         const jsonDados = await rDados.json()
//         document.body.innerText = jsonDados[2].aula
//         console.log(jsonDados[2].aula)
//     } catch (erro){
//         console.log('erro')
//         console.log(erro)
//     }
// }
// puxarDados()


async function puxarDados(){
    const rDados = await fetch('./dados.json')
    const rClientes = await fetch('./clientes.json')

    const jsonDados = await (rDados).json()
    const jsonClientes = await (rClientes).json()

    console.log(jsonClientes)
    console.log(jsonDados[2])
}
puxarDados()


async function asyncSemPromise() {
    // Console não irá esperar.
    await setTimeout(() => console.log('Depois de 1s'), 1000);
    console.log('acabou');
  }
  asyncSemPromise();
  
  async function iniciarAsync() {
    await new Promise(resolve => {
      setTimeout(() => resolve(), 1000)
    });
    console.log('Depois de 1s');
  }
  iniciarAsync();
  