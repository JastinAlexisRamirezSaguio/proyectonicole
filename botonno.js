document.addEventListener("DOMContentLoaded", function () {
    const buttonNo = document.querySelector('#no');
    const buttonYes = document.querySelector('#yes');
    const gatoImg = document.querySelector('#gato'); // Seleccionamos la imagen

    let scaleFactor = 1; // Factor de escala inicial

    let messages = [
        '¿Estás segura?',
        '¿Segurísima?',
        'Piénsalo bien',
        'Piénsalo muy muy bien',
        'Respuesta incorrecta...',
        'Creo que te equivocaste',
        'Última oportunidad'
    ];

    buttonNo.addEventListener('click', () => {
        scaleFactor += 0.2; // Aumenta el tamaño en cada clic
        buttonYes.style.transform = `scale(${scaleFactor})`; // Aplica el crecimiento
        buttonYes.style.transition = "transform 0.3s ease-in-out"; // Agrega una transición suave

        // Seleccionamos un mensaje aleatorio para el botón "NO"
        const indexRandom = Math.floor(Math.random() * messages.length);
        buttonNo.textContent = messages[indexRandom];

        // Cambiamos la imagen
        gatoImg.src = "images/imagen2.1.png"; // Asegúrate de que la ruta es correcta
    });
});
