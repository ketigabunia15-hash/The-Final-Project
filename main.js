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

const filterButtons = document.querySelectorAll('.project-filters button');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.textContent.toLowerCase(); // button-ის ტექსტი, მაგალითად "web design"

    projectCards.forEach(card => {
      const category = card.querySelector('span').textContent.toLowerCase();

      if (filter === 'all' || category === filter) {
        card.style.display = 'block'; // გამოაჩინე
      } else {
        card.style.display = 'none';  // დამალე
      }
    });
  });
});