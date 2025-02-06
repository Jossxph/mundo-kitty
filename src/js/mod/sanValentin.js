const memories = [
    {
        title: "Lugares sin Fronteras",
        text: "Aunque estés lejos, cada mensaje tuyo me hace sentir que estás siempre conmigo a mi lado, eso te hace especial, Te amo."
    },
    {
        title: "Llamadas Bonis",
        text: "Recuerdo cuando en una llamada casi me estaba quedando dormino y en mi entresueño escuchaba tu voz, (llamandome) jaja"
    },
    {
        title: "Sueños a Dos",
        text: "En las noches que hablamos y siempre nos despedimos y nos damos las buenas noches, me hace sertir bien, por eso siempre te amo con locura."
    },
    {
        title: "Amor a lo lejos",
        text: "Aunque no estemos juntos siempre pienso en ti y espero mucho poder vernos pronto."
    },
    {
        title: "Días de Espera",
        text: "Contando cada día hasta nuestro encuentro, quiero vivir, compartir y sentir muchas cosas contigo."
    },
    {
        title: "Amor que Cruza Kilómetros",
        text: "La distancia es solo un número, porque lo nuestro es un amor va mas haya que simples numeritos."
    }
];


let currentMemory = 0;
const screens = {
    welcome: document.getElementById('welcome-screen'),
    memory: document.getElementById('memory-screen'),
    final: document.getElementById('final-screen'),
    celebration: document.getElementById('celebration-screen')
};

function createStarryBackground() {
    const starContainer = document.getElementById('starry-background');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 2}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = Math.random();
        starContainer.appendChild(star);
    }
}

function startJourney() {
    gsap.to(screens.welcome, {
        opacity: 0, duration: 0.5, onComplete: () => {
            screens.welcome.classList.add('hidden');
            screens.memory.classList.remove('hidden');
            gsap.fromTo(screens.memory, { opacity: 0 }, { opacity: 1, duration: 0.5 });
            showMemory();
        }
    });
}

function showMemory() {
    const memoryTitle = document.getElementById('memory-title');
    const memoryText = document.getElementById('memory-text');

    memoryTitle.textContent = memories[currentMemory].title;
    memoryText.textContent = memories[currentMemory].text;

    gsap.fromTo([memoryTitle, memoryText],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
}

function nextMemory() {
    currentMemory++;
    if (currentMemory >= memories.length) {
        gsap.to(screens.memory, {
            opacity: 0, duration: 0.5, onComplete: () => {
                screens.memory.classList.add('hidden');
                screens.final.classList.remove('hidden');
                gsap.fromTo(screens.final, { opacity: 0 }, { opacity: 1, duration: 0.5 });
            }
        });
    } else {
        showMemory();
    }
}

function playWithButton() {
    const noButton = document.getElementById('no-button');
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.random() * maxX}px`;
    noButton.style.top = `${Math.random() * maxY}px`;
}

function sayYes() {
    gsap.to(screens.final, {
        opacity: 0, duration: 0.5, onComplete: () => {
            screens.final.classList.add('hidden');
            screens.celebration.classList.remove('hidden');
            gsap.fromTo(screens.celebration, { opacity: 0 }, { opacity: 1, duration: 0.5 });
            celebration();
        }
    });
}

const musicControl = document.getElementById('music-control');
const loveSong = document.getElementById('love-song');

musicControl.addEventListener('click', () => {
    if (loveSong.paused) {
        loveSong.play();
        musicControl.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        `;
    } else {
        loveSong.pause();
        musicControl.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
        `;
    }
});

function celebration() {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 50 * (timeLeft / duration);
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
    }, 250);
}

function playLoveSong() {
    musicControl.click();
}

function resetExperience() {
    currentMemory = 0;
    screens.celebration.classList.add('hidden');
    screens.welcome.classList.remove('hidden');
    const noButton = document.getElementById('no-button');
    noButton.style.position = 'static';
}

// Initialize
createStarryBackground();
document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.star', {
        opacity: 0,
        stagger: 0.1,
        duration: 2
    });
});
