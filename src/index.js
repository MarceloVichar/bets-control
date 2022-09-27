let name = prompt("Qual seu nome?")
document.getElementById('name').innerHTML = `Aqui estão seus lançamentos, ${name || ''}`
alert(`Olá ${name}, seja bem vindo ao seu painel de apostas`)

function onClickBalanceLink() {
    confirm('Balanços estarão disponíveis em breve. Deseja ser avisado?')
}

function adds() {
    document.getElementById('add').setAttribute('for', 'my-modal')
}
