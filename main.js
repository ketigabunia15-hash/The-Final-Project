const images = [
  "css/img/me.jpg",
  "css/img/photo1.jpg",
  "css/img/photo2.jpg"
];

let currentIndex = 0;
const heroImage = document.getElementById("heroImage");

setInterval(() => {
  heroImage.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroImage.src = images[currentIndex];
    heroImage.style.opacity = 1;
  }, 500);

}, 5000);

const skillSection = document.querySelector('.about-me');
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          bar.style.width = bar.dataset.level;
        });
        skillObserver.disconnect(); // ერთხელ შესრულდეს
      }
    });
  },
  { threshold: 0.4 }
);

skillObserver.observe(skillSection);
