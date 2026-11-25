function alternarMenu() {
    let menu = document.getElementById("menu");
    let botao = document.querySelector(".menu-botao");

    menu.classList.toggle("aberto");

    let aberto = menu.classList.contains("aberto");
    botao.setAttribute("aria-expanded", aberto);
    botao.textContent = aberto ? "✕ Fechar" : "☰ Menu";
}

let elementoAno = document.getElementById("ano");
if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
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
