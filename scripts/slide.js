let indiceSecao = 0;
const $secoes = $("section");

$secoes.each(function(i) {
    if (i === 0)
        $(this).css("display", "flex").hide().fadeIn(500);
    else
        $(this).hide();
});

function passarSecao(i) {
    if (i < 0) {
        indiceSecao = $secoes.length - 1;
        i = $secoes.length - 1;
    }
    if (i >= $secoes.length) {
        indiceSecao = 0;
        i = 0;
    }

    if (i <= 1) pararMusica();
    if (i >= 2 && audioEl.paused) tocarMusica(indiceMusica);

    $secoes.stop(true, true).fadeOut(500);
    $($secoes[indiceSecao]).fadeIn(500).css("display", "flex");
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
        indiceSecao++;
        passarSecao(indiceSecao);
    } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
        indiceSecao--;
        passarSecao(indiceSecao);
    }
});

document.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        indiceSecao++;
        passarSecao(indiceSecao);
    } else {
        indiceSecao--;
        passarSecao(indiceSecao);
    }
});
