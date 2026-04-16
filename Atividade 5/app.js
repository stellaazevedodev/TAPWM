// Array para armazenar as respostas
let respostas = JSON.parse(localStorage.getItem('respostas')) || [];

// Elementos do DOM
const formulario = document.getElementById('formulario');
const inputIdade = document.getElementById('idade');
const selectSexo = document.getElementById('sexo');
const selectOpiniao = document.getElementById('opiniao');
const botaoLimpar = document.getElementById('limpar');
const botaoautomatico = document.getElementById('automatico');
const divEstatisticas = document.getElementById('estatisticas');

// Evento para enviar o formulário
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const idade = parseInt(inputIdade.value);
    const sexo = selectSexo.value;
    const opiniao = selectOpiniao.value;
    
    // Validação
    if (!idade || !sexo || !opiniao) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    if (idade < 0 || idade > 150) {
        alert('Por favor, digite uma idade válida!');
        return;
    }
    
    // Adicionar resposta ao array
    respostas.push({
        idade: idade,
        sexo: sexo,
        opiniao: opiniao
    });
    
    // Salvar no localStorage
    localStorage.setItem('respostas', JSON.stringify(respostas));
    
    // Limpar formulário
    formulario.reset();
    
    // Atualizar estatísticas
    atualizarEstatisticas();
    
    alert('Resposta registrada com sucesso!');
});

// Evento para limpar dados
botaoLimpar.addEventListener('click', function() {
    if (confirm('Tem certeza que deseja limpar todos os dados?')) {
        respostas = [];
        localStorage.removeItem('respostas');
        divEstatisticas.innerHTML = '';
        alert('Todos os dados foram removidos!');
    }
});

// Função para atualizar estatísticas
function atualizarEstatisticas() {
    if (respostas.length === 0) {
        divEstatisticas.innerHTML = '<p style="text-align: center; color: #999;">Nenhuma resposta registrada ainda</p>';
        return;
    }
    
    // Calcular estatísticas
    
    const totalRespostas = respostas.length;
    const idades = respostas.map(r => r.idade);
    const mediaIdade = (idades.reduce((a, b) => a + b, 0) / idades.length).toFixed(2);
    const idadeMaxima = Math.max(...idades);
    const idadeMinima = Math.min(...idades);
    
    // Contar opiniões
    const pessimoCount = respostas.filter(r => r.opiniao === 'PESSIMO').length;
    const bomCount = respostas.filter(r => r.opiniao === 'BOM').length;
    const otimoCount = respostas.filter(r => r.opiniao === 'OTIMO').length;
    
    // Calcular percentuais
    const totalBomOtimo = bomCount + otimoCount;
    const percentualBomOtimo = ((totalBomOtimo / totalRespostas) * 100).toFixed(2);
    
    // Montar HTML com as estatísticas
    const html = `
        <h2>Estatísticas da Pesquisa</h2>
        <div class="stats-container">
            <div class="stat-box">
                <h3>Total de Respostas</h3>
                <p class="stat-value">${totalRespostas}</p>
            </div>
            
            <div class="stat-box">
                <h3>Média de Idade</h3>
                <p class="stat-value">${mediaIdade} anos</p>
            </div>
            
            <div class="stat-box">
                <h3>Idade Máxima</h3>
                <p class="stat-value">${idadeMaxima} anos</p>
            </div>
            
            <div class="stat-box">
                <h3>Idade Mínima</h3>
                <p class="stat-value">${idadeMinima} anos</p>
            </div>
            
            <div class="stat-box">
                <h3>Respostas "Péssimo"</h3>
                <p class="stat-value">${pessimoCount}</p>
            </div>
            
            <div class="stat-box">
                <h3>Bom e Ótimo</h3>
                <p class="stat-value">${percentualBomOtimo}%</p>
                <p class="stat-subtitle">(${totalBomOtimo} respostas)</p>
            </div>
        </div>
    `;
    
    divEstatisticas.innerHTML = html;
}

botaoautomatico.addEventListener('click', function() {
    
    const respostasAutomatica = [
        { idade: 25, sexo: 'Masculino', opiniao: 'BOM' },
        { idade: 30, sexo: 'Feminino', opiniao: 'OTIMO' },
        { idade: 22, sexo: 'Outro', opiniao: 'PESSIMO' },
        { idade: 28, sexo: 'Masculino', opiniao: 'BOM' },
        { idade: 35, sexo: 'Feminino', opiniao: 'OTIMO' }, 
        { idade: 40, sexo: 'Masculino', opiniao: 'PESSIMO' },
        { idade: 19, sexo: 'Feminino', opiniao: 'BOM' },
        { idade: 27, sexo: 'Outro', opiniao: 'OTIMO' },
        { idade: 33, sexo: 'Masculino', opiniao: 'PESSIMO' },
        { idade: 24, sexo: 'Feminino', opiniao: 'BOM' },
        { idade: 29, sexo: 'Masculino', opiniao: 'OTIMO' },
        { idade: 31, sexo: 'Feminino', opiniao: 'PESSIMO' },
        { idade: 26, sexo: 'Outro', opiniao: 'BOM' },
        { idade: 38, sexo: 'Masculino', opiniao: 'OTIMO' },
        { idade: 21, sexo: 'Feminino', opiniao: 'PESSIMO' },
        { idade: 34, sexo: 'Masculino', opiniao: 'BOM' },
        { idade: 23, sexo: 'Feminino', opiniao: 'OTIMO' },
        { idade: 37, sexo: 'Outro', opiniao: 'PESSIMO' },
        { idade: 20, sexo: 'Masculino', opiniao: 'BOM' },
        { idade: 32, sexo: 'Feminino', opiniao: 'OTIMO' },
        { idade: 27, sexo: 'Masculino', opiniao: 'PESSIMO' },
        { idade: 29, sexo: 'Feminino', opiniao: 'BOM' },
        { idade: 36, sexo: 'Outro', opiniao: 'OTIMO' },
        { idade: 22, sexo: 'Masculino', opiniao: 'PESSIMO' },
        { idade: 41, sexo: 'Feminino', opiniao: 'BOM' },
        { idade: 18, sexo: 'Masculino', opiniao: 'OTIMO' },
        { idade: 39, sexo: 'Feminino', opiniao: 'PESSIMO' },
        { idade: 25, sexo: 'Outro', opiniao: 'BOM' },
        { idade: 44, sexo: 'Masculino', opiniao: 'OTIMO' },
        { idade: 19, sexo: 'Feminino', opiniao: 'PESSIMO' },
        { idade: 35, sexo: 'Masculino', opiniao: 'BOM' },
        { idade: 28, sexo: 'Feminino', opiniao: 'OTIMO' },
        { idade: 42, sexo: 'Outro', opiniao: 'PESSIMO' },
        { idade: 26, sexo: 'Masculino', opiniao: 'BOM' },
        { idade: 31, sexo: 'Feminino', opiniao: 'OTIMO' },
        { idade: 20, sexo: 'Masculino', opiniao: 'PESSIMO' },
        { idade: 38, sexo: 'Feminino', opiniao: 'BOM' },
        { idade: 24, sexo: 'Outro', opiniao: 'OTIMO' },
        { idade: 43, sexo: 'Masculino', opiniao: 'PESSIMO' },
        { idade: 27, sexo: 'Feminino', opiniao: 'BOM' },
        { idade: 36, sexo: 'Masculino', opiniao: 'OTIMO' },
        { idade: 23, sexo: 'Feminino', opiniao: 'PESSIMO' },
        { idade: 32, sexo: 'Outro', opiniao: 'BOM' },
        { idade: 29, sexo: 'Masculino', opiniao: 'OTIMO' },
        { idade: 45, sexo: 'Feminino', opiniao: 'PESSIMO' },
    ];

    // Adicionar respostas automáticas ao array
    respostas.push(...respostasAutomatica);
    
    // Salvar no localStorage
    localStorage.setItem('respostas', JSON.stringify(respostas));
    
    // Atualizar e exibir estatísticas
    atualizarEstatisticas();
    
    alert('45 respostas geradas com sucesso!');
});

// Exibir estatísticas ao carregar a página
window.addEventListener('load', function() {
    atualizarEstatisticas();
});
