document.getElementById('btn-ask').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.remove('hidden'); // Muestra el mensaje
    this.textContent = '¡Gracias!'; // Cambia el texto del botón
    this.disabled = true; // Desactiva el botón
});