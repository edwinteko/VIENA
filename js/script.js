document.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("musica");

    if (!audio) {
        console.error("No se encontró el elemento <audio>");
        return;
    }

    // Se activa el audio al primer clic del usuario
    document.body.addEventListener("click", () => {
        audio.play().catch(error => {
            console.log("El navegador bloqueó la reproducción automática.", error);
        });
    }, { once: true }); // Solo ejecuta la función una vez
});
