let nome = document.getElementById('nomeEmpresa')
let cpfCnpj = document.getElementById('cpfCnpj')
let email = document.getElementById('email')
let cep = document.getElementById('cep')
let senha = document.getElementById('senha')
let confirmarSenha = document.getElementById('confirmarSenha')
let selecao = document.getElementById('seletor')
let objUsuario = [];
let objEmpresa = [];


function Clicar() {
    if (nome.value == '' || cpfCnpj.value == '' || email.value == '' || cep.value == '' || senha.value == '' || confirmarSenha.value == '') {
        alert('Preencha todos os campos!')
    }
    else if (senha.value != confirmarSenha.value) {
        alert('As senhas não batem')
    }
    else if (cep.value.length < 8 || cep.value.length > 8) {
        alert('CEP inválido!')
    }
    else if (email.value.endsWith("@")) {
        alert('Digite um email válido!')
    }
    else {
        if (seletor.value == 'cpf') {
            if (cpfCnpj.value.length < 11 || cpfCnpj.value.length > 11) {
                alert('CPF inválido!')
            }
            else {
                let user = criarUsuario()
                objUsuario = Ler_dados(0)
                objUsuario.push(user)
                salvarDados(0)
                alert('Cadastro feito com sucesso!')
                window.location.href = 'login.html';
            }

        }
        else {
            if (cpfCnpj.value.length < 14 || cpfCnpj.value.length > 14) {
                alert('CNPJ inválido!')
            }
            else {
                let emp = criarEmpresa()
                objEmpresa = Ler_dados(1)
                objEmpresa.push(emp)
                salvarDados(1)
                alert('Cadastro feito com sucesso!')
                window.location.href = 'login.html';
            }

        }
    }

}

function criarUsuario() {
    return {
        nome: nome.value,
        cpfcnpj: cpfCnpj.value,
        email: email.value,
        cep: cep.value,
        senha: senha.value,
        confirmaSenha: confirmarSenha.value,
        login: false
    }
}
function criarEmpresa() {
    return {
        nome: nome.value,
        cpfcnpj: cpfCnpj.value,
        email: email.value,
        cep: cep.value,
        senha: senha.value,
        confirmaSenha: confirmarSenha.value,
        login: false
    }
}

function salvarDados(storage) {

    if (storage == 0) {
        let listaJSONuser = JSON.stringify(objUsuario)
        localStorage.setItem('lista_usuarios', listaJSONuser)
    }

    else {
        let listaJSONempresa = JSON.stringify(objEmpresa)
        localStorage.setItem('lista_empresas', listaJSONempresa)
    }

}

function Ler_dados(storage) {

    if (storage == 0) {
      let str_dados = localStorage.getItem('lista_usuarios');
      let objDados = [];
  
      if (str_dados) {
        objDados = JSON.parse(str_dados);
      }
      return objDados;
    }
  
    else {
      let str_dados = localStorage.getItem('lista_empresas');
      let objDados = [];
  
      if (str_dados) {
        objDados = JSON.parse(str_dados);
      }
      return objDados;
    }
  
  }

$(function () {
    $('#header').load("cabecalho.html");
    $('#footer').load("rodape.html");
});


