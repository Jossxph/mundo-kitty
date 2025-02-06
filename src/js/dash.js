// SCRIPT DE LA PARTE DE WELCOME DE DASH

const messages = [
    "Eres mi sol en días nublados ☀️",
    "Tu sonrisa ilumina mi mundo 😊",
    "Cada momento contigo es mágico ✨",
    "Eres mi inspiración diaria 💫",
    "Tu amor me hace mejor persona 💝",
    "Cada mensaje tuyo alegra mi día 📲",
    "Contigo, cualquier lugar se siente como hogar 🏠",
    "Tu risa es la melodía que alegra mis mañanas 🎶",
    "Eres la chispa que enciende mi corazón 🔥",
    "Cada minuto sin ti me recuerda lo afortunado que soy 💌",
    "Eres mi refugio en medio del caos 🌿",
    "Con cada palabra tuya, el mundo se detiene 🕊️",
    "Tu voz es el sonido más hermoso que conozco 🎧",
    "A tu lado, el tiempo vuela sin prisa ⏳",
    "Tu mirada me derrite, incluso a la distancia 👀",
    "Eres la razón de mis sonrisas inesperadas 😄",
    "Cada día pienso en ti y se me alegra el alma 🌸",
    "Tu amor me llena y me impulsa a ser mejor 🌟",
    "Aunque estemos lejos, siempre te siento cerca en mi corazón 💓",
    "Cada llamada contigo es un regalo que atesoro 🎁",
    "Eres la magia que transforma mis días grises en color 🌈",
    "Contigo, la distancia se vuelve insignificante 🛤️",
    "Tus palabras son el puente que une nuestras almas 🌉",
    "Eres mi cómplice en esta aventura llamada amor 💑",
    "Cada recuerdo contigo es un tesoro que guardo con cariño 🎀",
    "Tu amor es mi motor para seguir adelante 🚀",
    "A tu lado, la vida se vuelve una dulce melodía 🎵",
    "Eres mi pensamiento favorito en cada momento del día 💭",
    "Tu ternura me envuelve como un cálido abrazo 🤗",
    "Eres mi sueño hecho realidad, sin importar la distancia 💭",
    "Cada mensaje tuyo es un pedacito de felicidad en mi día 📬",
    "A veces, cierro los ojos y siento que ya estás aquí a mi lado 👥",
    "Tu amor es el mejor viaje, y no necesito boleto para volar 🚀",
    "Contigo, cada día es una nueva aventura emocionante 🎢",
    "Eres el motivo de mis pensamientos más dulces 💭",
    "Tu forma de ser me enamora una y otra vez 💕",
    "Cada minuto lejos de ti solo fortalece mi amor ❤️",
    "Eres mi secreto mejor guardado y mi verdad más hermosa 🤫",
    "Tu risa me contagia y alegra mi espíritu ☺️",
    "Cada vez que hablo contigo, mi corazón se acelera 💓",
    "Eres la razón por la que sonrío sin motivo aparente 😌",
    "Contigo, la distancia se convierte en un simple detalle 📏",
    "Tu presencia en mis mensajes hace que el día sea perfecto 🌞",
    "Eres mi refugio en un mundo a veces caótico 🌌",
    "Cada palabra tuya es un abrazo que recorre kilómetros 🤍",
    "Eres la melodía que da ritmo a mis días 💖",
    "Tu amor ilumina cada rincón de mi corazón 🔆",
    "Contigo, cada segundo cuenta y cada risa se vuelve eternidad ⏰",
    "Eres mi inspiración en cada paso que doy 🏃‍♂️",
    "Cada día contigo, aunque sea a la distancia, es un regalo de amor 🎁"
];


function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
    heart.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
    heart.innerText = ['💖', '💝', '💗', '💓'][Math.floor(Math.random() * 4)];
    document.getElementById('heartContainer').appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
}

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    document.getElementById('heartContainer').appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1500);
}

function burstHearts(event) {
    const rect = event.target.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const distance = 50;
        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;

        setTimeout(() => {
            createFloatingHeart(startX + offsetX, startY + offsetY);
            createSparkle(startX + offsetX, startY + offsetY);
        }, i * 100);
    }
}

function removeMessage(messageElement) {
    messageElement.classList.add('hide');
    setTimeout(() => {
        messageElement.remove();
    }, 500);
}

function addMessage() {
    const messagesContainer = document.getElementById('messages');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const messageElement = document.createElement('div');
    messageElement.classList.add(
        'message-bubble',
        'bg-white',
        'p-6',
        'rounded-2xl',
        'shadow-lg',
        'text-center',
        'text-pink-600',
        'font-semibold',
        'hover-tilt'
    );
    messageElement.textContent = randomMessage;

    messagesContainer.appendChild(messageElement);

    // Forzar un reflow
    messageElement.offsetHeight;

    // Mostrar el mensaje con animación
    messageElement.classList.add('show');

    // Programar la eliminación del mensaje después de 5 segundos
    setTimeout(() => {
        removeMessage(messageElement);
    }, 5000);
}

// Parallax effect
document.addEventListener('mousemove', (e) => {
    const parallaxElements = document.querySelectorAll('.parallax-text');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    parallaxElements.forEach(element => {
        const movement = 30;
        element.style.transform = `translate(${mouseX * movement}px, ${mouseY * movement}px)`;
    });
});

document.getElementById('loveButton').addEventListener('click', burstHearts);
document.getElementById('messageButton').addEventListener('click', addMessage);

// Crear corazones aleatorios periódicamente
setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight;
    createFloatingHeart(x, y);
}, 3000);


// SCRIPT DE NOTI Y CORREOS


// Inicialización de objetos globales
let NotificacionesActive = {};
let CorreosActive = {};

// Función para renderizar notificaciones
function renderNotifications(data) {
    const container = document.getElementById('notifications-content');
    container.innerHTML = ''; // Limpiar contenido anterior

    // Verificar si hay notificaciones
    const notificaciones = Object.values(data);
    if (notificaciones.length === 0) {
        container.innerHTML = `
                <div class="text-center text-slate-400 py-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    <p class="text-lg font-medium">No hay notificaciones</p>
                    <p class="text-sm text-slate-500">Estarás al día cuando lleguen nuevas notificaciones</p>
                </div>
            `;
        return;
    }

    // Renderizar notificaciones existentes
    notificaciones.forEach(noti => {
        const notificationElement = document.createElement('div');
        notificationElement.innerHTML = `
                <div class="bg-slate-800/50 rounded-xl p-4 hover:bg-slate-800 transition-colors duration-200">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-pink-500 font-medium">${noti.titulo}</span>
                        <span class="text-sm text-slate-400">${noti.texto_cold}</span>
                    </div>
                    <p class="text-slate-300 text-sm mb-3">${noti.descripcion}</p>
                    ${noti.text_button ? `
                        <button onclick="window.location.href='${noti.dirrecion}'" 
                                class="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-all duration-300 text-sm font-medium flex items-center gap-2 hover:gap-3">
                            ${noti.text_button}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    ` : ''}
                </div>
            `;
        container.appendChild(notificationElement);
    });
}

// Función para renderizar correos
function renderEmails(data) {
    const container = document.getElementById('emails-content');
    container.innerHTML = ''; // Limpiar contenido anterior

    // Verificar si hay correos
    const correos = Object.values(data);
    if (correos.length === 0) {
        container.innerHTML = `
                <div class="text-center text-slate-400 py-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p class="text-lg font-medium">No hay correos</p>
                    <p class="text-sm text-slate-500">Cuando recibas correos, aparecerán aquí</p>
                </div>
            `;
        return;
    }

    // Renderizar correos existentes
    correos.forEach(correo => {
        const emailElement = document.createElement('div');
        emailElement.innerHTML = `
                <div class="bg-slate-800/50 rounded-xl p-4 hover:bg-slate-800 transition-colors duration-200">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-blue-500 font-medium">${correo.titulo}</span>
                        <span class="text-sm text-slate-400">${correo.texto_cold}</span>
                    </div>
                    <p class="text-slate-300 text-sm mb-3">${correo.descripcion}</p>
                    <button class="text-sm text-blue-500 hover:underline">Leer más</button>
                </div>
            `;
        container.appendChild(emailElement);
    });
}

// Modal toggle functions
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
}

// Método para añadir nuevas notificaciones o correos
function addNotification(type, data) {
    const obj = type === 'notificacion' ? NotificacionesActive : CorreosActive;
    const newKey = `${type}${Object.keys(obj).length + 1}`;
    obj[newKey] = data;

    if (type === 'notificacion') {
        renderNotifications(NotificacionesActive);
    } else {
        renderEmails(CorreosActive);
    }
}

// Event Listeners para abrir y cerrar modales
document.getElementById('notifications-btn')?.addEventListener('click', () => {
    renderNotifications(NotificacionesActive);
    toggleModal('notifications-modal');
});

document.getElementById('email-btn')?.addEventListener('click', () => {
    renderEmails(CorreosActive);
    toggleModal('email-modal');
});

document.getElementById('close-notifications-btn')?.addEventListener('click', () => toggleModal('notifications-modal'));
document.getElementById('close-email-btn')?.addEventListener('click', () => toggleModal('email-modal'));

// Ejemplos de uso (puedes comentar/descomentar para probar)
// Añadir una notificación de ejemplo
addNotification('notificacion', {
    titulo: "Sorpresa especial",
    descripcion: "Es hora de hacerlo único.",
    text_button: "Ir ahora",
    texto_cold: "Hace un momento",
    dirrecion: "../../src/modules/san-valentin.html"
});


// // Añadir un correo de ejemplo
// addNotification('correo', {
//     titulo: "Mensaje Importante",
//     descripcion: "Tengo algo que decirte...",
//     texto_cold: "Ahora mismo"
// });


// SCRIPT GENERAL DEL DASH


// Todos los elementos del DOM
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const userBtn = document.getElementById('user-btn');
const userMenu = document.getElementById('user-menu');

// Toggle Sidebar Móvil
mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
});

sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
});

// Cerrar sidebar al cambiar tamaño de ventana
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
});

// Toggle User Menu
userBtn.addEventListener('click', () => {
    userMenu.classList.toggle('hidden');
});

// Cerrar User Menu al hacer click fuera
document.addEventListener('click', (e) => {
    if (!userBtn.contains(e.target) && !userMenu.contains(e.target)) {
        userMenu.classList.add('hidden');
    }
});



// Animaciones para los cards al hacer scroll
const cards = document.querySelectorAll('.card-hover');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});