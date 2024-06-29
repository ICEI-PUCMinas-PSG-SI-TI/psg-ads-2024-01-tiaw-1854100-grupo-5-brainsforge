$(function () {
  $('#header').load("cabecalho.html");
  $('#footer').load("rodape.html");
});

function Ler_dados() {
  let strDados = localStorage.getItem('lista_vagas_tiaw');
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  }

  else {
    objDados = {informacao: []}
  }

  return objDados;
}

function Ler_dados_usuario(storage) {

  if (storage == 0) {
    let str_dados = localStorage.getItem('lista_usuarios');
    let objDados = {};
    usuario = storage;

    if (str_dados) {
      objDados = JSON.parse(str_dados);
    }
    return objDados;
  }

  else {
    let str_dados = localStorage.getItem('lista_empresas');
    let objDados = {};
    usuario = storage;

    if (str_dados) {
      objDados = JSON.parse(str_dados);
    }
    return objDados;
  }

}


