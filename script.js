const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();
