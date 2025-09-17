document.addEventListener("DOMContentLoaded", () => {

    const btnTema = document.getElementById("btn-tema");
    const body = document.body;
    if (btnTema) {
        btnTema.addEventListener("click", () => {
            body.classList.toggle("dark");
            btnTema.textContent = body.classList.contains("dark") 
                ? "☀️ Cambiar a modo claro" 
                : "🌙 Cambiar a modo oscuro";
        });
    }

    const secciones = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    secciones.forEach(sec => observer.observe(sec));
});