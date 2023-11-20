let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function switchSlide(slideIndex) {
    currentSlide = slideIndex;
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slide-container').style.transform = `translateX(-${slideWidth * currentSlide}px)`;

    dots.forEach(dot => dot.classList.remove('active-dot'));
    dots[currentSlide].classList.add('active-dot');
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    switchSlide(currentSlide);
}, 5000);