const btnAbrirModal3 = document.querySelector("#btn-abrir-modal3");
const modal3 = document.querySelector("#modal3");
const modal4 = document.querySelector("#modal4");
const btnAbrirModal4 = document.querySelector("#btn-abrir-modal4"); // Botón para abrir modal2
const btnCerrarModal3 = document.querySelector("#btn-cerrar-modal3");
const btnCerrarModal4 = document.querySelector("#btn-cerrar-modal4");

btnAbrirModal3.addEventListener("click", () => {
    modal3.showModal();
});



btnAbrirModal4.addEventListener("click", () => {
    modal4.showModal();
});
btnCerrarModal3.addEventListener("click", () => {
    modal3.close();
});
btnCerrarModal4.addEventListener("click", () => {
    modal4.close();
});



