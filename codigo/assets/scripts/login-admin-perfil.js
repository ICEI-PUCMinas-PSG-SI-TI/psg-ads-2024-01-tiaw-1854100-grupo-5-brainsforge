$(function () {
  $('#header').load("cabecalho.html");
  $('#footer').load("rodape.html")
});

var usuario;
function Ler_dados(storage) {

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

function Salvar_dados(obj, usuario) {
  lista_usuarios = obj;
  lista_empresas = obj;

  if (usuario == 0) {
    localStorage.setItem("lista_usuarios", JSON.stringify(lista_usuarios));
  }
  else {
    localStorage.setItem("lista_empresas", JSON.stringify(lista_empresas));
  }
}
