
let indiceSecao = 0;
const secoes = Array.from(document.querySelectorAll("section"));

// Esconder todas as seções, exceto a primeira
secoes.forEach((secao, index) => {
    secao.style.display = index === 0 ? "flex" : "none";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown") {
        indiceSecao++;
        passarSecao(indiceSecao);
    }
});
document.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
        indiceSecao++;
        passarSecao(indiceSecao);
    }
});


function passarSecao(i) {
    if (i >= secoes.length) {
        indiceSecao = 0; // Resetar para a primeira seção
    }

    secoes.forEach(secao => secao.style.display = "none"); // Esconde todas
    secoes[indiceSecao].style.display = "flex"; // Exibe apenas a seção atual
}
