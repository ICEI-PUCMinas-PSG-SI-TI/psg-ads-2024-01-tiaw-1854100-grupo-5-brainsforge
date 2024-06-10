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
          funcao: "Fazer o transporte de pessoas, cargas, documentos ou produtos para um destino estabelecido.",
          requisitos: "Ensino médio completo, (CNH) Categoria E",
          salario: "2789,05",
          carga_h: "12 horas",
          n_vagas: 8
        },
        {
          id: 2,
          empresa: "SecuroServ",
          vaga: "Caminhoneiro",
          funcao: "Transportar materiais e produtos para diversos itinerários. Elaborar relatórios de viagens e rotas.",
          requisitos: "Ensino médio completo, (CNH) Categoria E",
          salario: "3240,85",
          carga_h: "13 horas",
          n_vagas: 17
        },
        {
          id: 3,
          empresa: "Downtown Cab Co",
          vaga: "Taxista",
          funcao: "Transportar passageiros para o local que desejarem",
          requisitos: "Ensino médio completo, (CNH) Categoria B",
          salario: "2492,34",
          carga_h: "9 horas",
          n_vagas: 7
        },
        {
          id: 4,
          empresa: "Dewbauchee",
          vaga: "Projetista mecânico",
          funcao: "Projetar todas as etapas de desenvolvimento de componentes, sistemas ou máquinas",
          requisitos: "Ensino médio completo, curso técnico na área de desenho industrial",
          salario: "5344,23",
          carga_h: "3 horas",
          n_vagas: 11
        },
        {
          id: 5,
          empresa: "LifeInvader",
          vaga: "Desenvolvedor web",
          funcao: "Construir e planejar aplicações web",
          requisitos: "Ensino médio completo, curso superior em TI",
          salario: "6344,83",
          carga_h: "7 horas",
          n_vagas: 13
        },
        {
          id: 6,
          empresa: "SecuroServ",
          vaga: "Analista de sistemas",
          funcao: "Servir como um tradutor entre as necessidades do usuário e o programa a ser desenvolvido pelos programadores",
          requisitos: "Ensino médio completo, curso superior em análise e desenvolvimento de sistemas",
          salario: "15.344,20",
          carga_h: "3 horas",
          n_vagas: 5
        },
        {
          id: 7,
          empresa: "Merrywater",
          vaga: "Porteiro",
          funcao: "Fiscalizar, observar e orientar a entrada e saída de pessoas, receber, identificar e encaminhar as pessoas aos destinatários",
          requisitos: "Ensino médio completo",
          salario: "3400,76",
          carga_h: "13 horas",
          n_vagas: 2
        },
        {
          id: 8,
          empresa: "Cayo Perico",
          vaga: "Guarda",
          funcao: "Executar policiamento ostensivo, preventivo, uniformizado e aparelhado, na proteção à população, bens, serviços e instalações",
          requisitos: "Ensino médio completo, Treinamento militar",
          salario: "4749,13",
          carga_h: "16 horas",
          n_vagas: 7
        }
      ]
    }
  }

  return objDados;
}




