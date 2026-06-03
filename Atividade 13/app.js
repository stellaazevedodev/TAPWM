const texto = document.getElementById("input1");
const maiusculo = document.getElementById("maiusculo");
const minusculo = document.getElementById("minusculo");

maiusculo.addEventListener("change", function () {
    texto.value = texto.value.toUpperCase();
});

minusculo.addEventListener("change", function () {
    texto.value = texto.value.toLowerCase();
});