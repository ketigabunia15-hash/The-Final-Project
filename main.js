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

    const filter = button.textContent.toLowerCase(); 

    projectCards.forEach(card => {
      const category = card.querySelector('span').textContent.toLowerCase();

      if (filter === 'all' || category === filter) {
        card.style.display = 'block'; 
      } else {
        card.style.display = 'none';  
      }
    });
  });
});

const testimonials = [
  {
    img: "css/img/pic1.jpg",
    quote: "Thank you for the wonderful website design. The work was carried out very professionally, and I am extremely satisfied with the result.",
    name: "Mariam Gabunia",
    position: "Lawyer"
  },
  {
    img: "css/img/pic2.jpg",
    quote: "Thank you for the completed web design. The result is truly outstanding, and I appreciate your professionalism.",
    name: "Gvantsa Shonia",
    position: "Lawyer"
  },
  {
    img: "css/img/pic3.jpg",
    quote: "I would like to express my gratitude for the excellent website design. The result exceeds expectations, and your professionalism is truly invaluable.",
    name: "Giorgi Dartsmelidze",
    position: "Financial Auditor"
  },
  {
    img: "css/img/pic4.jpg",
    quote: "Thank you for the high-quality website design. The standard of the work represents a clear example of professionalism, and I greatly appreciate your efforts.",
    name: "Bakuri Kharchilava",
    position: "Public Relations Coordinator"
  }
];
const imgEl = document.querySelector('.testimonial-left img');
const quoteEl = document.querySelector('.testimonial-right .quote');
const nameEl = document.querySelector('.testimonial-right h4');
const positionEl = document.querySelector('.testimonial-right span');
const dots = document.querySelectorAll('.testimonial-dots span');

let currentSlide = 0;
function showSlide(index) {
  const t = testimonials[index];
  imgEl.src = t.img;
  quoteEl.textContent = t.quote;
  nameEl.textContent = t.name;
  positionEl.textContent = t.position;
   dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentSlide = i;
    showSlide(i);
  });
});
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
}, 5000);
showSlide(currentSlide);
