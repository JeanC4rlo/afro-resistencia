let $videos = $('video');

$videos.on("play", function(e) {
    audioEl.volume = 0.4;
})

$videos.on("ended", function(e) {
    audioEl.volume = 1;
})

$videos.on("pause", function(e) {
    audioEl.volume = 1;
})
