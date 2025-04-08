document.querySelectorAll('.carrusel-container').forEach(container => {
    const carrusel = container.querySelector('.carrusel');
    const images = container.querySelectorAll('.carrusel img');
    const totalImages = images.length;
    const flechaIzquierda = container.querySelector('.flecha.left');
    const flechaDerecha = container.querySelector('.flecha.right');
    let currentIndex = 0;
    let isAnimating = false;

    function updateCarrusel() {
        isAnimating = true;
        carrusel.style.transition = 'transform 0.5s ease-in-out';
        carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => isAnimating = false, 500);
    }

    function moveToNextImage() {
        if (isAnimating) return;
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarrusel();
    }

    function moveToPrevImage() {
        if (isAnimating) return;
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarrusel();
    }

    flechaIzquierda.addEventListener('click', moveToPrevImage);
    flechaDerecha.addEventListener('click', moveToNextImage);

    // Auto-cambio cada 10 segundos
    let intervalo = setInterval(moveToNextImage, 10000);

    // Pausar cambio automático si el usuario pasa el mouse
    container.addEventListener('mouseenter', () => clearInterval(intervalo));
    container.addEventListener('mouseleave', () => {
        intervalo = setInterval(moveToNextImage, 10000);
    });

    updateCarrusel();
});
