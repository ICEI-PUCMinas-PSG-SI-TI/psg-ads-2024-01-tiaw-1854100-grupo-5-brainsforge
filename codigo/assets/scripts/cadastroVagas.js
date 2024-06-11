var vagas = []
var emp = document.getElementById('empresa')
var cnpj = document.getElementById('cnpj')
var vaga = document.getElementById('vaga')
var nVagas = document.getElementById('numVagas')
var funcao = document.getElementById('funcao')
var requisitos = document.getElementById('requisitos')
var carga = document.getElementById('carga')
var salario = document.getElementById('salario')
var botao = document.getElementById('botaoCadastrar')

botao.addEventListener('click', (e) => {
    if (emp.value == '' || cnpj.value == '' || vaga.value == '' || nVagas.value == '' || funcao.value == '' || requisitos.value == '' || carga.value == '' || salario.value == '') {
        alert('Preencha todos os campos!')
    }
    else {
        let vaga = criarVaga()
        vagas.push(vaga)
        salvaLista()
        alert('Salvo com sucesso!')
    }
    e.preventDefault()
    
})

function criarVaga() {
    return {
        empresa: emp.value,
        cnpj: cnpj.value,
        vaga: vaga.value,
        numeroDeVagas: nVagas.value,
        funcao: funcao.value,
        requisitos: requisitos.value,
        cargaHoraria: carga.value,
        salario: salario.value
    }
}

function salvaLista() {
    let listaJSON = JSON.stringify(vagas)
    localStorage.setItem('vagas', listaJSON)
}

function recuperarLista() {
    let listaRecuperada = JSON.parse(localStorage.getItem('vagas'))

    vagas = listaRecuperada
}

recuperarLista()

$(function(){
    $('#header').load("cabecalho.html");
    $('#footer').load("rodape.html");
});


