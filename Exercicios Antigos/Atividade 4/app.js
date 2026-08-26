const opcs = ["pedra", "papel", "tesoura"];
const resultadoEl = document.getElementById("resultado");

function getComputerEscolha() {
    const index = Math.floor(Math.random() * opcs.length);
    return opcs[index];
}

function getResult(user, computer) {
    if (user === computer) {
        return "Empate";
    }

    if (
        (user === "pedra" && computer === "tesoura") ||
        (user === "papel" && computer === "pedra") ||
        (user === "tesoura" && computer === "papel")
    ) {
        return "Você venceu!";
    }

    return "Computador venceu!";
}

function jogar(escolhaUsuario) {
    const computerEscolha = getComputerEscolha();
    const result = getResult(escolhaUsuario, computerEscolha);

    resultadoEl.innerHTML = `
        <p><strong>Sua escolha:</strong> ${escolhaUsuario}</p>
        <p><strong>Escolha do computador:</strong> ${computerEscolha}</p>
        <p><strong>Resultado:</strong> ${result}</p>
    `;
}

const btns = document.querySelectorAll(".opcs button");
btns.forEach((button) => {
    button.addEventListener("click", () => {
        jogar(button.dataset.opc);
    });
});
