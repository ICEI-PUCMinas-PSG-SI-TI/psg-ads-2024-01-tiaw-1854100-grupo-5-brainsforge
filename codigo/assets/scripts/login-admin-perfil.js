$(function () {
  $('#header').load("cabecalho.html");
  $('#footer').load("rodape.html")
});


function Ler_dados(storage) {

  if (storage == 0) {
    let str_dados = localStorage.getItem('lista_usuarios');
    let objDados = {};

    if (str_dados) {
      objDados = JSON.parse(str_dados);
      return objDados;
    }
  }

  else {
    let str_dados = localStorage.getItem('lista_empresas');
    let objDados = {};

    if (str_dados) {
      objDados = JSON.parse(str_dados);
      return objDados;
    }
  }

}

function Salvar_dados(lista_usuarios) {
  localStorage.setItem('lista_usuarios', JSON.stringify(lista_usuarios));
}

