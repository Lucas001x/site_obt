let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextSlideBtn = document.getElementById('nextSlideBtn');
const skipBtn = document.getElementById('skipBtn');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

nextSlideBtn.addEventListener('click', () => {
    if (currentSlide === slides.length - 1) {
        window.location.href = 'pages/login.html';
    } else {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
});

skipBtn.addEventListener('click', () => {
    window.location.href = 'pages/login.html';
});

showSlide(currentSlide);

let startX;

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (!startX) return;

    let currentX = event.touches[0].clientX;
    let diffX = startX - currentX;

    if (diffX > 50) {
        nextSlide();
    } else if (diffX < -50) {
        previousSlide();
    }

    startX = null;
}

function nextSlide() {
    if (currentSlide === slides.length - 1) {
        window.location.href = 'pages/login.html';
    } else {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);