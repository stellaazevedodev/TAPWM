const janelaImg = document.getElementById('janela_img');
const janelaText = document.getElementById('janela_text');
let quebrada = false;

janelaImg.addEventListener('mouseover', () => {
    if (!quebrada) {
        janelaImg.src = "img/janela_aberta.png";
        janelaText.textContent = "Janela Aberta";
    }
});

janelaImg.addEventListener('mouseout', () => {
    if (!quebrada) {
        janelaImg.src = "img/janela_fechada.png";
        janelaText.textContent = "Janela Fechada";
    }
});

janelaImg.addEventListener('click', () => {
    janelaImg.src = "img/janela_quebrada.png";
    janelaText.textContent = "Janela Quebrada";
    quebrada = true;
});