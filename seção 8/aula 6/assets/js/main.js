/*fetch('pessoas.json')
  .then(resposta=>resposta.json())
  .then(json=> carregaElementosNaPagina(json))
*/

axios('pessoas.json')
  .then(resposta => carregaElementosNaPagina(resposta.data))

function carregaElementosNaPagina(json){
  const table = document.createElement('table')
  const resultado = document.querySelector('.resultado')


  json.unshift({nome: 'Nome',idade:'Idade',salario:'Salário'})

  for(let pessoa of json){
    const tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerHTML = pessoa.nome
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerHTML = pessoa.idade
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerHTML = pessoa.salario
    tr.appendChild(td)

    table.appendChild(tr)
    resultado.appendChild(table)

    console.log(pessoa.nome)
  }
}

