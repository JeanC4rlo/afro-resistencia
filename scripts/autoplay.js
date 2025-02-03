let audioEl = document.querySelector("audio");

let musicas = [
    "https://jeanc4rlo.github.io/kunwana/audio/musicas/Cangoma me chamou - Clementina de Jesus.mp3",
    "https://jeanc4rlo.github.io/kunwana/audio/musicas/Canto das três raças - Clara Nunes.mp3",
    "https://jeanc4rlo.github.io/kunwana/audio/musicas/Diário de um detento - Racionais Mcs.mp3",
    "https://jeanc4rlo.github.io/kunwana/audio/musicas/Festa de Umbanda - Martinho da Vila.mp3",
    "https://jeanc4rlo.github.io/kunwana/audio/musicas/Filhos de Ghandi - Jorge bem Jor feat. Gilberto Gil.mp3",
    "https://jeanc4rlo.github.io/kunwana/audio/musicas/Morena de Angola - Clara Nunes.mp3.mp3",
    "https://jeanc4rlo.github.io/kunwana/audio/musicas/Negro É Lindo - Jorge bem Jor.mp3",
    "https://jeanc4rlo.github.io/kunwana/audio/musicas/Negroide - Taiguara.mp3",
    "https://jeanc4rlo.github.io/kunwana/audio/musicas/Refavela - Gilberto Gil.mp3",
    "https://jeanc4rlo.github.io/kunwana/audio/musicas/Senhora liberdade - Zezé Motta.mp3",
]

let indiceMusica = 0;

function passarMusica(i) {
    if(i >= musicas.length) {
        indiceMusica = 0;
        i = 0;
    }

    audioEl.src = musicas[i];
}

function tocarMusica(i) {
    audioEl.pause();
    audioEl.load();
    audioEl.play();
}

function pararMusica() {
    audioEl.pause();
}

audioEl.addEventListener("ended", (e) => {
    indiceMusica++;
    passarMusica(indiceMusica);
    tocarMusica(indiceMusica);
})
