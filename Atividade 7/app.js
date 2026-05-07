// 1) Maior número
function maiorNumero() {
    let n1 = Number(prompt("Digite o primeiro número"));
    let n2 = Number(prompt("Digite o segundo número"));
    let n3 = Number(prompt("Digite o terceiro número"));

    let maior = n1;

    if (n2 > maior) {
        maior = n2;
    }

    if (n3 > maior) {
        maior = n3;
    }

    alert("Maior número: " + maior);
}


// 2) Ordem crescente
function ordemCrescente() {
    let numeros = [];

    numeros[0] = Number(prompt("Digite o primeiro número"));
    numeros[1] = Number(prompt("Digite o segundo número"));
    numeros[2] = Number(prompt("Digite o terceiro número"));

    numeros.sort(function(a, b){
        return a - b;
    });

    alert("Ordem crescente: " + numeros);
}


// 3) Palíndromo
function verificarPalindromo() {
    let texto = prompt("Digite uma palavra");

    texto = texto.toLowerCase();
    texto = texto.replaceAll(" ", "");

    let invertido = texto.split("").reverse().join("");

    if (texto == invertido) {
        alert("É palíndromo");
    } else {
        alert("Não é palíndromo");
    }
}


// 4) Subconjunto
function verificarSubconjunto() {
    let palavra1 = prompt("Digite a primeira palavra");
    let palavra2 = prompt("Digite a segunda palavra");

    if (palavra1 == "" || palavra2 == "" || palavra1 == undefined || palavra2 == undefined) {
        alert("Erro");
    } else if (palavra1.includes(palavra2)) {
        alert("É um subconjunto");
    } else {
        alert("Não é um subconjunto");
    }
}


// 5) Dia da semana
function diaSemana() {
    let data = prompt("Digite a data no formato DD/MM/AAAA");

    let partes = data.split("/");

    let dia = partes[0];
    let mes = partes[1] - 1;
    let ano = partes[2];

    let novaData = new Date(ano, mes, dia);

    let diasSemana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    alert("Dia da semana: " + diasSemana[novaData.getDay()]);
}