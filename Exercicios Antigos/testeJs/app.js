
/* VARIAVEIS GLOBAIS */

var resultado;
var resultado2; /* sem atribuição fica UNDEFINED */
var resultado3;
var resultado4;
var resultado5 = "Conteúdo 5";
var resultado6 = "Conteúdo 6";



resultado = prompt("Qual é o seu nome?");

var teste = function () {

    var resultado6 = "nao adianta mudar";
    /* assume como a global já existente */

    resultado5; /* está local */

    resultado7 = "dentro da função"; /* não existe global com esse nome, SEM VAR fica acessível globalmente */

    resultado3 = "mudei dentro da função"; /* usando variável global */
    resultado5 = "Conteúdo 5 na função"
    return "resultado da função";
}

resultado4 = teste(); /* atribuindo resultado da função */



resultado7 = "fora da função";

alert("resultado=" + resultado + " \n resultado2=" + resultado2 + " \n resultado3=" + resultado3 + " \n resultado4 =" + resultado4 +
    " \n resultado5 =" + resultado5 + " \n resultado6 =" + resultado6 + " \n resultado7 =" + resultado7);


if(true){
    var teste="conteudo teste";
    let teste1="conteudo teste2";
    alert("dentro do bloco" + teste)
    alert("dentro do bloco" + teste1)
}

alert("fora do bloco" + teste)
alert("fora do bloco" + teste1) /* erro, teste1 é local ao bloco */

// n = 5;

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         console.log(i, j);
//     }
// }