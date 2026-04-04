let nome = prompt("Digite o nome do aluno:");


let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

let confirmar = confirm(`
Dados do aluno:
Nome: ${nome}
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}
Média: ${media.toFixed(2)}

Deseja confirmar?
`);

if (confirmar) {
    alert(`Aluno: ${nome}\nMédia: ${media.toFixed(2)}`);
} else {
    alert("Operação cancelada!");
}

