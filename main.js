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

