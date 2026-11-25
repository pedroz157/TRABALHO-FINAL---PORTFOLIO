function alternarMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("aberto");
}

let ano = document.getElementById("ano");
if (ano) {
    ano.textContent = new Date().getFullYear();
}

function ampliarCertificado() {
    let modal = document.getElementById("modalCertificado");
    if (modal) {
        modal.style.display = "flex";
    }
}

function fecharCertificado() {
    let modal = document.getElementById("modalCertificado");
    if (modal) {
        modal.style.display = "none";
    }
}
