// Burger menu mobile
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => nav.classList.toggle('open'));

// Fermer le menu au clic sur un lien
document.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Fade-in au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .steps__item, .temoin').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Header background au scroll (optionnel, déjà semi-transparent par défaut)
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.style.boxShadow = window.scrollY > 20 ? '0 2px 12px rgba(0,0,0,0.05)' : 'none';
});
