document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector(".loader");

    // Esperar 2 segundos antes de ocultar el loader
    setTimeout(function() {
        loader.classList.add("hidden");
    }, 2000);
});

// Agrega un evento de carga a cada enlace
const links = document.querySelectorAll("a");
links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const loader = document.querySelector(".loader");
        loader.classList.remove("hidden");
        
        // Redirigir a la nueva página después de 2 segundos
        setTimeout(function() {
            window.location.href = link.href;
        }, 2000);
    });
});