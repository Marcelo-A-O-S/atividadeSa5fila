var quantidade = 0;
var clientes = Array()
function AdicionarNaLista()
{
    var Tipos = ['tipo1','tipo2','tipo3']
    var i = Math.floor(Math.random() * 3);
    const cliente = new Cliente()
    cliente.cliente = 'Cliente'+ quantidade
    
    cliente.tipo = Tipos[i]
    // cliente.Cliente(cliente.cliente,cliente.tipo)
    
    
    return cliente
    
}
function limparFila(){
    var Todos = clientes.length 
    quantidade = 0
 
    for (let index = Todos; index > -1; index--)
    {
        clientes.splice(index, 1)
    }
    console.log('A fila foi inteiramente retira\n A fila de clientes está vazia')
}
function RetirarDaFila(){
    clientes.splice(0,1)
    
    console.log('O cliente foi atendido')
}
function enfileirar(clientes)
{ 
    var teste = clientes
    var fila = ''
    var indice = quantidade - 1

    if(clientes.length === 0){
        console.log('A fila de clientes está vazia')
    }else{
        for (let index = indice; index > -1; index--) {
            var cliente = `<cliente id="${clientes[index].cliente}" class="${clientes[index].tipo}"></cliente>`
    
            fila += cliente          
        }
        for (let index = 0; index < clientes.length; index++) {
            console.log(clientes[index])
            
        }
    }
    // return clientes.map((cliente)=>
    //     `<cliente id="${cliente.cliente}" class="${cliente.tipo}"></cliente>`
    // )
    return fila
}
var FilaDeClientes = document.getElementById("clientes")

var Adicionar = document.getElementById("btnAdicionar")
Adicionar.addEventListener('click', ()=>{
    
    clientes.push(AdicionarNaLista())
    quantidade = quantidade + 1
    FilaDeClientes.innerHTML = ''
    FilaDeClientes.innerHTML += enfileirar(clientes)
})
var Atender = document.getElementById("btnRemover")
Atender.addEventListener('click',()=>{
    console.log("Funcionando")
    RetirarDaFila()
    quantidade = quantidade - 1
    FilaDeClientes.innerHTML = ''
    FilaDeClientes.innerHTML += enfileirar(clientes)
})
var limpar = document.getElementById("btnLimpar")
limpar.addEventListener('click',()=>
{
    limparFila()
    FilaDeClientes.innerHTML = ''
    FilaDeClientes.innerHTML += enfileirar(clientes)
})
