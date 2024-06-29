var emp = document.getElementById('empresa')
var cnpj = document.getElementById('cnpj')
var vaga = document.getElementById('vaga')
var nVagas = document.getElementById('numVagas')
var funcao = document.getElementById('funcao')
var requisitos = document.getElementById('requisitos')
var carga = document.getElementById('carga')
var salario = document.getElementById('salario')
var botao = document.getElementById('botaoCadastrar')

botao.addEventListener('click', () => {
    if (emp.value == '' || cnpj.value == '' || vaga.value == '' || nVagas.value == '' || funcao.value == '' || requisitos.value == '' || carga.value == '' || salario.value == '') {
        alert('Preencha todos os campos!')
    }
    else {
        let vaga = criarVaga()
        let vagas = recuperarLista();   
        console.log(vagas);
        vagas.informacao.push(vaga)
        salvaLista(vagas)
        alert('Salvo com sucesso!')
    }
    
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

function salvaLista(vagas) {
    let listaJSON = JSON.stringify(vagas)
    localStorage.setItem('lista_vagas_tiaw', listaJSON)
}

function recuperarLista() {
    let strDados = localStorage.getItem('lista_vagas_tiaw');
    let objDados = {}

    if (strDados) {
        objDados = JSON.parse(strDados);
    }

    else {
        objDados = { informacao: [] }
    }

    return objDados;
}

recuperarLista()

$(function(){
    $('#header').load("cabecalho.html");
    $('#footer').load("rodape.html");
});


