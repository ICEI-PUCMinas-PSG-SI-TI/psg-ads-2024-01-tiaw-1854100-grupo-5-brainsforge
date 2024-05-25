$(function () {
  $('#header').load("cabecalho.html");
  $('#footer').load("rodape.html");
});

function Ler_dados() {
  let strDados = localStorage.getItem('listavagas0');
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  }

  else {
    objDados = {
      informacao: [
        {
          empresa: "Acme",
          vaga: "Motorista de utilitários",    
        },
        {
          empresa: "Progen",
          vaga: "Projetista mecânico", 
        },
        {
          empresa: "SecuroServ",
          vaga: "Analista de sistemas", 
        },
        {
          empresa: "Sprank",
          vaga: "Desenvolvedor web", 
        },
        {
          empresa: "E-cola",
          vaga: "Scrum master", 
        },
        {
          empresa: "Truffade",
          vaga: "Engenheiro Mecânico", 
        },
        {
          empresa: "Maibatsu",
          vaga: "Técnico em mecânica", 
        },
        {
          empresa: "Dinka",
          vaga: "Motorista de Caminhão", 
        },
        {
          empresa: "Rockstar",
          vaga: "Motorista de Van", 
        }
      ]
    };
  }

  return objDados;
}

function Imprimir_dados(filtro,texto) {
  let tela = document.getElementById("tela");
  let strHtml = "";
  let objDados = Ler_dados();

  for (let i = 0; i < objDados.informacao.length; i++) {

    let dados = objDados.informacao[i];
    let pesquisas = objDados.informacao[i].vaga.toLowerCase();

    
    if(!filtro||pesquisas.startsWith(texto)){
      
      strHtml += `
         
      <article class="vagas">
      <h6>Vaga: ${dados.vaga}</h6>        
      <h6>Empresa: ${dados.empresa}</h6>
      <a href="#">Saiba Mais <i class="fa-solid fa-arrow-right"></i></a>       
   </article>
        
      `;
    }
      
  }

  if(!strHtml){
    strHtml+=
      `
      <article class="vagas">
      <h6>Nenhum resultado foi encontrado</h6>           
     </article>
      `;
  }

  tela.innerHTML = strHtml;

}

function Filtro_pesquisa(){
  let texto = document.getElementById("buscar").value.toLowerCase();
  let filtro = 1;
   
  if(texto){
    document.getElementById("msg_erro").style.display = "none";
    document.getElementById("btn_limpar").style.display = "unset";
    Imprimir_dados(filtro,texto);
  }

  else{
     document.getElementById("msg_erro").innerHTML = "Preencha o campo corretamente";
     document.getElementById("msg_erro").style.display = "unset";
  }

}

function Limpar_filtro(){
   let filtro;
   document.getElementById("msg_erro").style.display="none";
   document.getElementById("btn_limpar").style.display = "none";
   document.getElementById("buscar").value="";
   Imprimir_dados(filtro);
}

onload = () => {
  Imprimir_dados();
}

document.getElementById("btn_busca").addEventListener('click',Filtro_pesquisa);
document.getElementById("btn_limpar").addEventListener('click',Limpar_filtro);


