let nome = document.getElementById('nomeEmpresa')
let cpfCnpj = document.getElementById('cpfCnpj')
let email = document.getElementById('email')
let cep = document.getElementById('cep')
let senha = document.getElementById('senha')
let confirmarSenha = document.getElementById('confirmarSenha')
let selecao = document.getElementById('seletor')
let cadastroUsuario = []
let cadastroEmpresa = []


function Clicar() {
    if(nome.value == '' || cpfCnpj.value == '' || email.value == '' || cep.value == '' || senha.value == ''|| confirmarSenha.value == '') {
        alert('Preencha todos os campos!')
    }
    else if(senha.value != confirmarSenha.value) {
        alert('As senhas não batem')
    }
    else if(cep.value.length < 8 || cep.value.length > 8) {
        alert('CEP inválido!')
    }
    else if(email.value.endsWith("@")) {
        alert('Digite um email válido!')
    }
    else {
        if(seletor.value == 'cpf') {
            if(cpfCnpj.value.length < 11 || cpfCnpj.value.length > 11) {
                alert('CPF inválido!')
            } 
            else {
                let user = criarUsuario()
                cadastroUsuario.push(user)
                salvarDados()
                alert('Cadastro feito com sucesso!')
            }
            
        }
        else {
            if(cpfCnpj.value.length < 14 || cpfCnpj.value.length > 14) {
                alert('CNPJ inválido!')
            } 
            else {
                let emp = criarEmpresa()
                cadastroEmpresa.push(emp)
                salvarDados()
                alert('Cadastro feito com sucesso!')
            }
            
        }
    }
    
}

function criarUsuario() {
    return {
        nome: nome.value,
        cpfcnpj: cpfCnpj.value,
        email: email.value,
        senha: senha.value,
        confirmaSenha: confirmarSenha.value
    }
}
function criarEmpresa() {
    return {
        nome: nome.value,
        cpfcnpj: cpfCnpj.value,
        email: email.value,
        cep: cep.value,
        senha: senha.value,
        confirmaSenha: confirmarSenha.value
    }
}

function salvarDados() {
    let listaJSONuser = JSON.stringify(cadastroUsuario)
    let listaJSONempresa = JSON.stringify(cadastroEmpresa)
    localStorage.setItem('usuarios', listaJSONuser)
    localStorage.setItem('empresas', listaJSONempresa)
}
$(function(){
    $('#header').load("cabecalho.html");
    $('#footer').load("rodape.html");
});


