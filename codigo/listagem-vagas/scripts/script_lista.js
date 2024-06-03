$(function () {
  $('#header').load("/codigo/cabecalho-rodape/cabecalho.html");
  $('#footer').load("/codigo/cabecalho-rodape/rodape.html");
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
          id: 0,
          empresa: "Acme",
          vaga: "Motorista de van",
          funcao: "Dirigir e manobrar veículos e transportar pessoas, cargas ou valores. Realizar verificações e manutenções básicas do veículo.",
          requisitos: "Ensino médio completo, (CNH) Categoria D",
          salario: "2344,23",
          carga_h: "5 horas",
          n_vagas: 5
        },
        {
          id: 1,
          empresa: "Progen",
          vaga: "Motorista de utilitários",
          funcao: "Dirigir e manobrar veículos e transportar pessoas, cargas ou valores. Realizar verificações e manutenções básicas do veículo.",
          requisitos: "Ensino médio completo, (CNH) Categoria D",
          salario: "2344,23",
          carga_h: "3 horas",
          n_vagas: 8
        },
        {
          id: 2,
          empresa: "SecuroServ",
          vaga: "Caminhoneiro",
          funcao: "Dirigir e manobrar veículos e transportar pessoas, cargas ou valores. Realizar verificações e manutenções básicas do veículo.",
          requisitos: "Ensino médio completo, (CNH) Categoria D",
          salario: "2344,23",
          carga_h: "18 horas",
          n_vagas: 17
        },
        {
          id: 3,
          empresa: "Downtown Cab Co",
          vaga: "Taxista",
          funcao: "Dirigir e manobrar veículos e transportar pessoas, cargas ou valores. Realizar verificações e manutenções básicas do veículo.",
          requisitos: "Ensino médio completo, (CNH) Categoria D",
          salario: "2344,23",
          carga_h: "5 horas",
          n_vagas: 7
        },
        {
          id: 4,
          empresa: "Dewbauchee",
          vaga: "Projetista mecânico",
          funcao: "Dirigir e manobrar veículos e transportar pessoas, cargas ou valores. Realizar verificações e manutenções básicas do veículo.",
          requisitos: "Ensino médio completo, (CNH) Categoria D",
          salario: "2344,23",
          carga_h: "3 horas",
          n_vagas: 11
        },
        {
          id: 5,
          empresa: "LifeInvader",
          vaga: "Desenvolvedor web",
          funcao: "Dirigir e manobrar veículos e transportar pessoas, cargas ou valores. Realizar verificações e manutenções básicas do veículo.",
          requisitos: "Ensino médio completo, (CNH) Categoria D",
          salario: "2344,23",
          carga_h: "18 horas",
          n_vagas: 13
        },
        {
          id: 6,
          empresa: "SecuroServ",
          vaga: "Analista de sistemas",
          funcao: "Dirigir e manobrar veículos e transportar pessoas, cargas ou valores. Realizar verificações e manutenções básicas do veículo.",
          requisitos: "Ensino médio completo, (CNH) Categoria D",
          salario: "2344,23",
          carga_h: "5 horas",
          n_vagas: 5
        },
        {
          id: 7,
          empresa: "Merrywater",
          vaga: "Porteiro",
          funcao: "Dirigir e manobrar veículos e transportar pessoas, cargas ou valores. Realizar verificações e manutenções básicas do veículo.",
          requisitos: "Ensino médio completo, (CNH) Categoria D",
          salario: "2344,23",
          carga_h: "3 horas",
          n_vagas: 2
        },
        {
          id: 8,
          empresa: "Cayo Perico",
          vaga: "Guarda",
          funcao: "Dirigir e manobrar veículos e transportar pessoas, cargas ou valores. Realizar verificações e manutenções básicas do veículo.",
          requisitos: "Ensino médio completo, (CNH) Categoria D",
          salario: "2344,23",
          carga_h: "18 horas",
          n_vagas: 7
        }
      ]
    }
  }

  return objDados;
}




