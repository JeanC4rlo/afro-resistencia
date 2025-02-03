let indiceSecao = 0;

const $secoes = $("section");

$secoes.each(function(i, obj) {
    if (i === 0)
        $(this).css("display", "flex")
    else
        $(this).css("display", "none")
})

function passarSecao(i) {
    if(i < 0) {
        indiceSecao = $secoes.length - 1;
        i = $secoes.length - 1;
    }
    if (i >= $secoes.length) {
        indiceSecao = 0;
        i = 0;
    }

    if(i <= 1)
        pararMusica();
    if(i >= 2 && audioEl.paused)
        tocarMusica();

    $secoes.each(function(secao) {
        $(this).css("display", "none");
    })

    $($secoes[indiceSecao]).css("display", "flex");
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "S" || e.key === "s") {
        indiceSecao++;
        passarSecao(indiceSecao);
    }
    else if(e.key == "ArrowUp" || e.key === "W" || e.key === "w") {
        indiceSecao--;
        passarSecao(indiceSecao);
    }
});

document.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        indiceSecao++;
        passarSecao(indiceSecao);
    }
    else {
        indiceSecao--;
        passarSecao(indiceSecao);
    }
});
