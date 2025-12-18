const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "css/img/photo1.jpg",
        "css/img/photo2.jpg",
    ];

    let currentIndex = 0;
    const slider = document.getElementById("slider");

    function changeImage() {
        currentIndex++;
        if (currentIndex >= images.length) currentIndex = 0;
        slider.src = images[currentIndex];
    }

    setInterval(changeImage, 5000);
});

const progressBars = document.querySelectorAll('.skill-progress');
function animateProgress() {
    progressBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const progressValue = bar.getAttribute('data-progress');

        if (barTop < windowHeight - 50) { // -50 პატარა offset
            bar.style.width = progressValue;
        }
    });
}

window.addEventListener('scroll', animateProgress);
window.addEventListener('load', animateProgress);

const skills = document.querySelectorAll('.skill-progress');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.level;
    }
  });
}, { threshold: 0.5 });

skills.forEach(skill => observer.observe(skill));
