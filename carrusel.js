// Carrusel
const carrusel = document.querySelector('.carrusel');
const images = document.querySelectorAll('.carrusel img');
const totalImages = images.length;

let currentIndex = 0;

function updateCarrusel() {
    // Cambiar la posición del carrusel para mostrar la imagen correcta
    carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveToNextImage() {
    // Aumentar el índice para mover a la siguiente imagen
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarrusel();
}

function moveToPrevImage() {
    // Disminuir el índice para mover a la imagen anterior
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarrusel();
}

// Configurar las flechas
const flechaIzquierda = document.querySelector('.flecha.left');
const flechaDerecha = document.querySelector('.flecha.right');

flechaIzquierda.addEventListener('click', moveToPrevImage);
flechaDerecha.addEventListener('click', moveToNextImage);

// Iniciar el carrusel con un intervalo de 10 segundos formato 1000 por segundo
setInterval(moveToNextImage, 10000); // Cambia la imagen cada 10segundos

// Inicializar el carrusel
updateCarrusel();
