const ladoA = document.getElementById('ladoA');
const ladoB = document.getElementById('ladoB');
const ladoC = document.getElementById('ladoC');
const verify = document.getElementById('verificar');
const resultado = document.getElementById('resultado');

function trueTriangulo() {
    const a = parseFloat(ladoA.value);
    const b = parseFloat(ladoB.value);
    const c = parseFloat(ladoC.value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        const html = 'Por favor, insira números válidos e positivos para todos os lados do triângulo.';
        console.log(html);
        resultado.innerHTML = html;

        return;
    }
    
    if (a + b <= c || a + c <= b || b + c <= a) {
        const html = 'Os valores inseridos não formam um triângulo válido.';
        console.log(html);
        resultado.innerHTML = html;
    } else {
        whatTriangulo();
    }
}

function whatTriangulo() {
    const a = parseFloat(ladoA.value);
    const b = parseFloat(ladoB.value);
    const c = parseFloat(ladoC.value);
    if (a === b && b === c) {
        console.log('O triângulo é equilátero.');
        const html = 'O triângulo é equilátero.';
        resultado.innerHTML = html;
    } else if (a === b || a === c || b === c) {
        console.log('O triângulo é isósceles.');
        const html = 'O triângulo é isósceles.';
        resultado.innerHTML = html;
    } else {
        console.log('O triângulo é escaleno.');
        const html = 'O triângulo é escaleno.';
        resultado.innerHTML = html;
    }
}

function clearInputs() {
    ladoA.value = '';
    ladoB.value = '';
    ladoC.value = '';
}
verify.addEventListener('click', () => {
    trueTriangulo();
    clearInputs();
});