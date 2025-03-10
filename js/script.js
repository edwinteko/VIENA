document.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("musica");
    let toggleButton = document.getElementById("toggle-audio");

    toggleButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            toggleButton.textContent = "🔇 Silenciar";
        } else {
            audio.pause();
            toggleButton.textContent = "🔊 Música";
        }
    });
});
