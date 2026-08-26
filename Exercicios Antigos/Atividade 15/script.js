const cursos = {
  ads: {
    nome: 'Análise e Desenvolvimento de Sistemas',
    descricao:
      'Forma profissionais capazes de projetar, desenvolver e manter sistemas computacionais para empresas e instituições.',
    duracao: '3 anos',
    turno: 'Noturno'
  },
  gti: {
    nome: 'Gestão da Tecnologia da Informação',
    descricao:
      'Prepara gestores para atuar com tecnologia, inovação, processos e administração de sistemas nas organizações.',
    duracao: '3 anos',
    turno: 'Noturno'
  },
  log: {
    nome: 'Logística',
    descricao:
      'Desenvolve conhecimentos para planejar, organizar e otimizar cadeias de suprimento, transporte e armazenagem.',
    duracao: '3 anos',
    turno: 'Diurno'
  },
  mec: {
    nome: 'Mecatrônica Industrial',
    descricao:
      'Une eletrônica, automação e mecânica para projetar e manter sistemas industriais inteligentes.',
    duracao: '3 anos',
    turno: 'Noturno'
  },
  pro: {
    nome: 'Engenharia de Produção',
    descricao:
      'Forma engenheiros para melhorar processos, reduzir desperdícios e aumentar a eficiência nas empresas.',
    duracao: '5 anos',
    turno: 'Diurno'
  }
};

function abrirCursoSelecionado() {
  const select = document.getElementById('curso');
  const valorSelecionado = select.value;

  if (!valorSelecionado) {
    return;
  }

  const curso = cursos[valorSelecionado];
  const confirmar = window.confirm(
    `Deseja abrir a janela com informações sobre ${curso.nome}?`
  );

  if (!confirmar) {
    return;
  }

  const novaJanela = window.open('', '_blank', 'width=600,height=300');

  if (!novaJanela) {
    alert('A janela foi bloqueada pelo navegador. Permita pop-ups para visualizar o curso.');
    return;
  }

  novaJanela.document.write(`<!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <title>${curso.nome}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background: #f8fafc; color: #111827; }
          h1 { color: #2563eb; }
          ul { line-height: 1.6; }
        </style>
      </head>
      <body>
        <h1>${curso.nome}</h1>
        <p>${curso.descricao}</p>
        <ul>
          <li><strong>Duração:</strong> ${curso.duracao}</li>
          <li><strong>Turno:</strong> ${curso.turno}</li>
        </ul>
      </body>
    </html>`);

  novaJanela.document.close();
}
