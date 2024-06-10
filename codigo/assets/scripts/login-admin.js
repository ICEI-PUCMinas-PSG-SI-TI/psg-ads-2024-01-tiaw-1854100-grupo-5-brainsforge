$(function(){
  $('#header').load("cabecalho.html");
  $('#footer').load("rodape.html")
});


function Ler_dados() {
  let str_dados = localStorage.getItem('usuarios13');
  let objDados = {};

  if (str_dados) {
    objDados = JSON.parse(str_dados);
  }

  else {
    objDados = {
      users: [
        {
          usuario: "admin",
          email: "admin@gmail.com",
          senha: "miojo123",
          id: 0
        },
        {
          usuario: "Jaderson",
          email: "jdergames@gmail.com",
          senha: "miojo123",
          id: 1
        },
        {
          usuario: "Jeanes",
          email: "jeanes@gmail.com",
          senha: "miojo321",
          id: 2
        }
      ]
    }
  }

  Salvar_dados(objDados);

  return objDados;
}

function Salvar_dados(usuarios13) {
  localStorage.setItem('usuarios13', JSON.stringify(usuarios13));
}

