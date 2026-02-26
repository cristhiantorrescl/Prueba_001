// Efecto de typing
const text = "Esta es una página web moderna con CSS3 y JavaScript. Disfruta las animaciones y la interactividad.";
let index = 0;
const description = document.getElementById('description');

function typeWriter() {
    if (index < text.length) {
        description.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Iniciar typing al cargar
window.onload = typeWriter;

// Cambiar color del título
const colors = ['#ffffff', '#e60073', '#00d4ff', '#39ff14', '#ff6b6b', '#ffd700'];
let colorIndex = 0;

function changeColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    document.getElementById('title').style.color = colors[colorIndex];
    
    // Efecto de confeti simple
    createConfetti();
}

// Contador
let count = 0;
function incrementCounter() {
    count++;
    document.getElementById('counter').textContent = count;
    
    // Animación de pulso
    const counter = document.getElementById('counter');
    counter.style.transform = 'scale(1.3)';
    setTimeout(() => {
        counter.style.transform = 'scale(1)';
    }, 200);
}

// Crear partículas de fondo
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

createParticles();

// Efecto de confeti
function createConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        document.body.appendChild(confetti);

        const angle = (Math.PI * 2 * i) / 30;
        const velocity = 200 + Math.random() * 200;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let x = 0, y = 0;
        const animate = () => {
            x += vx * 0.02;
            y += vy * 0.02 + 5;
            confetti.style.transform = `translate(${x}px, ${y}px)`;
            confetti.style.opacity = 1 - (Math.abs(x) / 500);
            
            if (Math.abs(x) < 500) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };
        requestAnimationFrame(animate);
    }
}

// Toggle de tema claro/oscuro
let isLight = false;
function toggleTheme() {
    isLight = !isLight;
    document.querySelector('.theme-toggle').classList.toggle('active');
    
    if (isLight) {
        document.body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
        document.body.style.color = '#333';
        document.querySelector('.btn').style.borderColor = '#333';
        document.querySelector('.btn').style.color = '#333';
    } else {
        document.body.style.background = 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)';
        document.body.style.color = '#fff';
        document.querySelector('.btn').style.borderColor = '#fff';
        document.querySelector('.btn').style.color = '#fff';
    }
}

// Efecto de mouse personalizado
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #fff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s;
        `;
        document.body.appendChild(newCursor);
    }
    
    const actualCursor = document.querySelector('.cursor');
    actualCursor.style.left = e.clientX - 10 + 'px';
    actualCursor.style.top = e.clientY - 10 + 'px';
});

// Efecto 3D en tarjeta
document.querySelector('.card').addEventListener('mousemove', (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.querySelector('.card').addEventListener('mouseleave', (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});