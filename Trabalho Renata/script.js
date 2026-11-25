// Função 1: Abrir e fechar o menu no celular (inspirado nos arquivos de Ana Letícia e Alexandra)
function alternarMenu() {
    let menu = document.getElementById("menu");
    let botao = document.querySelector(".menu-botao");

    menu.classList.toggle("aberto");

    let aberto = menu.classList.contains("aberto");
    botao.setAttribute("aria-expanded", aberto);
    botao.textContent = aberto ? "✕ Fechar" : "☰ Menu";
}

// Função 2: Atualizar automaticamente o ano no rodapé via DOM (inspirado no arquivo de Alexandra)
let elementoAno = document.getElementById("ano");
if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
}

// Função 3: Ampliar o certificado em tamanho maior manipulando o estilo no DOM
function ampliarCertificado() {
    let modal = document.getElementById("modalCertificado");
    if (modal) {
        modal.style.display = "flex";
    }
}

// Função 4: Fechar a visualização ampliada do certificado
function fecharCertificado() {
    let modal = document.getElementById("modalCertificado");
    if (modal) {
        modal.style.display = "none";
    }
}