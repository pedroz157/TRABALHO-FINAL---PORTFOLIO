function alternarMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("aberto");
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
