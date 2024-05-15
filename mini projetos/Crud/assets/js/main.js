// Interação com o layout

const isValidFields=()=>{
    document.getElementById('form').reportValidity()
    return true
}

const clearFields=()=>{
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(fields=>fields.value='')
}

const saveClient=()=>{
    if(isValidFields()){
        const client={
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('telefone').value,
            cidade: document.getElementById('cidade').value
        }

        const index=document.getElementById('nome').dataset.index
        if(index == 'new'){
            createClient(client)
        }else{
            updateClient(index,client)
        }
        updateTable()
        closeModal()
    }
}

// CRUD - Create Read Update Delete

const getLocalStorage=()=>JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage=(dbClient)=> localStorage.setItem("db_client",JSON.stringify(dbClient))

// CRUD - DELETE
const deleteCliente = (index)=>{
    const dbClient = readClient()
    dbClient.splice(index,1)
    setLocalStorage(dbClient)
}

// CRUD - UPDATE
const clearTable=()=>{
    const row=document.querySelectorAll('#tableClient>tbody tr')
    row.forEach(row=> row.parentNode.removeChild(row))
}
const updateClient= (index,client)=>{
    const dbClient = readClient()
    clearTable()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

// CRUD - READ
const readClient=()=> getLocalStorage()

// CRUD - CREATE
const createClient=(client)=>{
    const db_client=getLocalStorage()
    db_client.push (client)
    localStorage.setItem('db_client',JSON.stringify(db_client))
}

const createRow=(client,index)=>{
    const newRow= document.createElement('tr')
    newRow.innerHTML=`
    <td>${client.nome}</td>
    <td>${client.email}</td>
    <td>${client.celular}</td>
    <td>${client.cidade}</td>
    <td>
        <button type="button" class="button green" id="edit-${index}"> Editar</button>
        <button type="button" class="button red" id="delete${index}">Excluir</button>
    </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const updateTable=()=>{
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}

updateTable()

const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = ()=>{
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

const fillFields=(client)=>{
    document.getElementById('nome').value=client.nome
    document.getElementById('email').value= client.email
    document.getElementById('telefone').value= client.celular
    document.getElementById('cidade').value= client.cidade
    document.getElementById('nome').dataset.index= client.index
}

const editClient=(index)=>{
    const client=readClient()[index]
    client.index=index
    fillFields(client)
    openModal()
}

const editDelete=(event)=>{
    if(event.target.type== 'button'){
       const [action,index] = event.target.id.split('-')

       if(action == 'edit'){
            editClient(index)
       }else{
            const response = confirm(`Deseja realmente excluir o cliente?`)
            if(response){
                deleteCliente(index)
                updateTable()
            }
       }
    }
}

// eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('salvar').addEventListener('click',saveClient)

document.querySelector('#tableClient>tbody').addEventListener('click',editDelete)

// CRUD - create read update delete

//const db_client=[]
/*
const getLocalStorage=()=> JSON.parse(localStorage.getItem('db_client'))?? []
const setLocalStorage=(dbClient)=>localStorage.setItem("db_client",JSON.stringify(dbClient))


// CRUD - CREATE
const createClient=(client)=>{
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}

// CRUD - READ
const readClient=()=> getLocalStorage()

// CRUD - UPDATE
const updateClient=(index,client)=>{
    const dbClient=readClient()
    dbClient[index]=client
    setLocalStorage(dbClient)
}

// CRUD - DELETE
const deleteClient=(index)=>{
    const dbClient = readClient()
    dbClient.splice(index,1)
    setLocalStorage(dbClient)
}

const isValidFields=()=>{
    return document.getElementById('form').reportValidity()
}

// Interação com o layout
const clearFields=()=>{
    const fields= document.querySelectorAll('.modal-field')
    fields.forEach(field=> field.value='')
}

const saveClient=()=>{
    if(isValidFields()){
        const client={
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('telefone'),
            cidade: document.getElementById('cidade').value
        }
        createClient(client)

        closeModal()
        updateTable()

    }
}

const createRow=(client)=>{
    const newRow= document.createElement('tr')
    newRow.innerHTML= `
    <td>${client.nome}</td>
    <td>${client.email}</td>
    <td>${client.telefone}</td>
    <td>${client.cidade}</td>
    <td>
        <button type="button" class="button green">editar</button>
        <button type="button" class="button red">excluir</button>
    </td>
    `
    document.querySelector('#tableClient').style.backgroud='red'
    document.querySelector('#tableClient>tbody').appendChild(newRow)

}

const updateTable=()=>{
    const dbClient= readClient()
    dbClient.forEach(client)
}

updateTable()
                                  
//Evento
document.getElementById('cadastrarCliente').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('salvar').addEventListener('click',saveClient)
*/