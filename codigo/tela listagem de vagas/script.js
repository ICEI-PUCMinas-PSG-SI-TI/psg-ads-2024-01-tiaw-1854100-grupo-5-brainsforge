$(function () {
  $('#header').load("cabecalho.html");
  $('#footer').load("rodape.html");
});

function Ler_dados() {
  let strDados = localStorage.getItem('detalhevaga0');
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
          funcao: "Dirigir e manobrar veículos e transportar pessoas, cargas ou valores. Realizar verificações e manutenções básicas do veículo.",
          requisitos: "Ensino médio completo, (CNH) Categoria D",
          salario: "2344,23",
          carga_h: "8 horas",
          n_vagas: 13
        }
      ]
    };
  }

  Salvar_dados(objDados);

  return objDados;
}

function Salvar_dados(detalhevaga0) {
  localStorage.setItem('detalhevaga0', JSON.stringify(detalhevaga0));
}

function Imprimir_dados() {
  let tela = document.getElementById("tela");
  let strHtml = "";
  let objDados = Ler_dados();

  for (let i = 0; i < objDados.informacao.length; i++) {
    strHtml += `
    

      <article class="item">
        <h6>Vaga:</h6>
        <h6>${objDados.informacao[i].vaga}</h6>
      </article>

      <article class="item">
        <h6>Empresa:</h6>
        <h6>${objDados.informacao[i].empresa}</h6>
      </article>

      <article class="funcao">
        <h6>Função:</h6>
        <h6>${objDados.informacao[i].funcao}</h6>
      </article>

      <article class="requisitos">
        <h6>Requisitos:</h6>
        <h6>${objDados.informacao[i].requisitos}</h6>
      </article>

      <article class="item">
      <h6>Salário:</h6>
      <h6>R$ ${objDados.informacao[i].salario}</h6>
    </article>

    <article class="item">
        <h6>Carga horária:</h6>
        <h6>${objDados.informacao[i].carga_h}</h6>
      </article>

      <article class="item">
        <h6>Número de vagas:</h6>
        <h6>${objDados.informacao[i].n_vagas}</h6>
      </article>


      <button id="btnLink">Cadastrar-se</button>
    </section>

    `;
  }

  tela.innerHTML = strHtml;

}

onload = () => {
  Imprimir_dados();
}



