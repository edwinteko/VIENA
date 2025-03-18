document.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("musica");
    let toggleButton = document.getElementById("toggle-audio");

    toggleButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            toggleButton.textContent = "🔇";
        } else {
            audio.pause();
            toggleButton.textContent = "🔊";
        }
    });
});
function comprarProducto(boton) {
    let producto = boton.parentElement;
    let nombre = producto.querySelector("h2").textContent;
    let precio = producto.querySelector("p").textContent;

    let mensaje = `Hola, quiero comprar el siguiente producto:%0A*${nombre}*%0APrecio: ${precio}%0A¿Está disponible?`;
    let numeroWhatsApp = "59169828089"; // Tu número de WhatsApp

    let url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(url, "_blank");
}

