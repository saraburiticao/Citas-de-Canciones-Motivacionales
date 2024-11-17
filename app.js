// Array de citas en inglés y español
const citasIngles = [
    "🎶 'And in the end, the love you take is equal to the love you make.' - The Beatles",
    "🎶 'I will survive, oh, as long as I know how to love, I know I'll stay alive.' - Gloria Gaynor",
    "🎶 'It’s a beautiful day, don’t let it get away.' - U2",
    "🎶 'We are all in the gutter, but some of us are looking at the stars.' - Oasis, 'Champagne Supernova'",
    "🎶 'The hardest part is believing in yourself.' - The Script, 'The Man Who Can't Be Moved'"
];

const citasEspañol = [
    "🎶 'Y al final, uno siempre vuelve a los mismos sitios donde fue feliz.' - La Oreja de Van Gogh, 'Rosas'",
    "🎶 'Te quiero, pero ya no sé si somos la misma persona.' - Luis Fonsi, 'Aquí Estoy Yo'",
    "🎶 'La vida te da sorpresas, sorpresas te da la vida.' - Rubén Blades, 'Plástico'",
    "🎶 'Para poder entender el amor, hay que haber sufrido por él.' - Maná, 'El Amor'",
    "🎶 'Todo tiene su final, nada dura para siempre.' - Tito Puente, 'Oye Como Va'"
];

// Variables para los elementos HTML
const citaInglesElement = document.getElementById('citaIngles');
const citaEspañolElement = document.getElementById('citaEspañol');
const btnNuevaCita = document.getElementById('nuevaCita');
const citaGuardadaElement = document.getElementById('citaGuardada');
const btnGuardarCita = document.getElementById('guardarCita');

// Función para obtener una cita aleatoria
function obtenerCitaAleatoria() {
    const citaAleatoriaIngles = citasIngles[Math.floor(Math.random() * citasIngles.length)];
    const citaAleatoriaEspañol = citasEspañol[Math.floor(Math.random() * citasEspañol.length)];
    citaInglesElement.textContent = citaAleatoriaIngles;
    citaEspañolElement.textContent = citaAleatoriaEspañol;
}

// Función para guardar la cita favorita
function guardarCitaFavorita() {
    citaGuardadaElement.textContent = citaInglesElement.textContent + " | " + citaEspañolElement.textContent;
    citaGuardadaElement.style.display = 'block'; // Mostrar la cita guardada
    localStorage.setItem('citaFavorita', citaGuardadaElement.textContent); // Guardar en el almacenamiento local
}

// Verificar si ya hay una cita favorita guardada
function cargarCitaFavorita() {
    const citaGuardada = localStorage.getItem('citaFavorita');
    if (citaGuardada) {
        citaGuardadaElement.textContent = citaGuardada;
        citaGuardadaElement.style.display = 'block'; // Mostrar la cita guardada
    }
}

// Cargar las citas aleatorias cuando se recarga la página
window.onload = function () {
    obtenerCitaAleatoria();
    cargarCitaFavorita();
};

// Event listener para mostrar una nueva cita cuando el usuario hace clic en el botón
btnNuevaCita.addEventListener('click', function () {
    obtenerCitaAleatoria();
});

// Event listener para guardar la cita favorita
btnGuardarCita.addEventListener('click', function () {
    guardarCitaFavorita();
});
