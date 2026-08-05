const btn = document.getElementById("btn");
const form = document.forms["pesquisa"];

function FormPesquisa() {
    const opcVisita = form.elements["visita"];
    const respVisita = opcVisita.value;

    if (respVisita === "sim") {
        alert("Volte sempre à essa pagina!");
    } else {
        alert("Que bom que você voltou!");
    }

    form.reset();
}

btn.addEventListener("click", FormPesquisa);
