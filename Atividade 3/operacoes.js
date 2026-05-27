// Solicita dois números ao usuário
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let produto = numero1 * numero2;
let divisao = numero1 / numero2;
let resto = numero1 % numero2;

// Exibe os resultados
let resultado = `
OPERAÇÕES ARITMÉTICAS
=====================
Número 1: ${numero1}
Número 2: ${numero2}

Soma: ${numero1} + ${numero2} = ${soma}
Subtração: ${numero1} - ${numero2} = ${subtracao}
Produto: ${numero1} × ${numero2} = ${produto}
Divisão: ${numero1} ÷ ${numero2} = ${divisao.toFixed(2)}
Resto: ${numero1} % ${numero2} = ${resto}
`;

alert(resultado);

// Pergunta se deseja realizar novas operações
let novamente = confirm("Deseja realizar novas operações?");
if (novamente) {
    location.reload(); // Recarrega a página para começar novamente
}

